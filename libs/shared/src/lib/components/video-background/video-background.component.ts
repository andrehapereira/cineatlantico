import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cineatlantico-video-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-background.component.html',
  styles: [],
})
export class VideoBackgroundComponent implements AfterViewInit {

  @ViewChild('bgVid', {read: ElementRef })
  bgVid!: ElementRef;

  @Input({ required: true })
  src = '';
 
  ngAfterViewInit() {
    this.bgVid.nativeElement.muted = true;
    this.bgVid.nativeElement.play();   
  }
 
}
