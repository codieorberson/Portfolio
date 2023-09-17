import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProfileService } from '../services/profile.service';
import { About } from '../models/About';

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
    this.loadAbout();
    this.componentBottom = this.el.nativeElement.offsetTop + this.el.nativeElement.clientHeight;
  }

  about: About;
  isVisible = false;
  componentBottom: number;

  constructor(private el: ElementRef, private profileService: ProfileService) { this.componentBottom = 0}
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition + window.innerHeight - 100 >= this.el.nativeElement.offsetTop && scrollPosition <= this.componentBottom + 500) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  loadAbout(): void{
    this.profileService.GetAbout().subscribe(data => {
      this.about = data
    })
  }
}
