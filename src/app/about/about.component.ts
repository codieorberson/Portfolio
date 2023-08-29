import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('slideInTop', [
      state('void', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      state('*', style({
        transform: 'translateY(0)',
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

export class AboutComponent implements OnInit{
  ngOnInit() {
    this.componentBottom = this.el.nativeElement.offsetTop + this.el.nativeElement.clientHeight;
  }

  isVisible = false;
  componentBottom: number;

  constructor(private el: ElementRef) { this.componentBottom = 0}
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition + window.innerHeight - 100 >= this.el.nativeElement.offsetTop && scrollPosition <= this.componentBottom + 500) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
}
