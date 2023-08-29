import { Component, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  animations: [
    trigger('slideInLeft', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      state('*', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('void => *', animate('1000ms ease-out'))
    ]),
    trigger('slideInRight', [
      state('void', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      state('*', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('void => *', animate('1000ms ease-out'))
    ]),
    trigger('slideInBottom', [
      state('void', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      state('*', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => *', animate('1000ms ease-out'))
    ])
  ]
})
export class CvComponent {
  ngOnInit() {
    this.componentBottom = this.el.nativeElement.offsetTop + this.el.nativeElement.clientHeight;
  }
  componentBottom: number;
  isVisible = false;
  constructor(private el: ElementRef) { this.componentBottom = 0}
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset

    if (scrollPosition + window.innerHeight - 100 >= this.el.nativeElement.offsetTop && scrollPosition <= this.componentBottom + 800) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
  showSEDetails = false;
  SEText = "+ Details";
  showPEDetails = false;
  PEText = "+ Details";
  showASADetails = false;
  ASAText = "+ Details";

  toggleSEDetails(): void {
    this.showSEDetails = !this.showSEDetails;
    this.SEText = this.showSEDetails ? "- Details" : "+ Details";
  }

  togglePEDetails(): void {
    this.showPEDetails = !this.showPEDetails;
    this.PEText = this.showPEDetails ? "- Details" : "+ Details";
  }

  toggleASADetails(): void {
    this.showASADetails = !this.showASADetails;
    this.ASAText = this.showASADetails ? "- Details" : "+ Details";
  }
}
