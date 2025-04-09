import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],

  templateUrl: './about-us.component.html'
 
})
export class AboutUsComponent implements AfterViewInit {
  @ViewChild('textContainer') textContainer!: ElementRef;
  showFullText = false;
  needsTruncation = false;

  ngAfterViewInit() {
    this.checkTextHeight();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkTextHeight();
  }

  checkTextHeight() {
    const element = this.textContainer.nativeElement;
    this.needsTruncation = element.scrollHeight > 500;
  }

  toggleText() {
    this.showFullText = !this.showFullText;
  }
}
