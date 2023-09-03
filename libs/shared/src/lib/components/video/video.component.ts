import { Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cineatlantico-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styles: [],
})
export class VideoComponent {

  @ViewChild('videoFrame', { read: ElementRef<HTMLIFrameElement>, static: true })
  private videoFrame!: ElementRef<HTMLIFrameElement>;

  @Input({
    required: true
  })
  embed: string = '';

  ngAfterViewInit() {
    if (this.videoFrame?.nativeElement)
    this.videoFrame.nativeElement.src = this.embed;
  }

  /* Force height to keep as 16/9 */
  get frameHeight() {
    const frameWidth = this.videoFrame.nativeElement.getBoundingClientRect().width;
    return `${(frameWidth * 9) / 16}px`;
  }
}
