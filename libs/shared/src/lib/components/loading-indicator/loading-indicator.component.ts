import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'cineatlantico-loading-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-indicator.component.html',
  styles: [],
})
export class LoadingIndicatorComponent {

  @Input()
  cameraLoader = true;

  private colorSpectrum = [
    '#302F80',
    '#5456A5',
    '#66BC45',
    '#BA519F'
  ]

  private cssVariablesToUpdate = [
    '--dot-one',
    '--dot-two',
    '--dot-three',
    '--dot-four',
    '--dot-five',
    '--dot-six',
    '--dot-seven',
    '--dot-eight',
    '--dot-nine'
  ]
  
  private destroy$ = new Subject<void>();
  
  ngOnInit(): void {
    if (!this.cameraLoader) {
      interval(150).pipe(takeUntil(this.destroy$)).subscribe(() => {
        const root: HTMLElement | null = document.querySelector(':root')
        this.cssVariablesToUpdate.forEach(variable => {
          root?.style.setProperty(variable, this.colorSpectrum[this.random()]);
        })
      })
    }
  }

  random() {
    return Math.floor(Math.random() * (3 - 0 + 1) + 0)
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
