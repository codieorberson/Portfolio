import { Component, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
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
    ])
  ]
})
export class SkillsComponent {
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

  languages = [
    { name: '.NET', progress: 95 },
    { name: 'Angular', progress: 90 },
    { name: 'Python', progress: 85 },
    { name: 'REST / SOAP', progress: 90 },
    { name: 'Java', progress: 80 },
    { name: 'JavaScript', progress: 90 },
    { name: 'Apex', progress: 75 },
  ];

  tools = [
    { name: 'Azure Data Factory', progress: 95 },
    { name: 'Pulumi', progress: 90 },
    { name: 'Docker', progress: 90 },
    { name: 'ADO', progress: 95 },
    { name: 'Jenkins', progress: 90 },
    { name: 'Octopus', progress: 90 },
    { name: 'Swagger', progress: 90 },
  ];

  servers = [
    { name: 'Azure', progress: 95 },
    { name: 'Windows', progress: 90 },
    { name: 'PCF', progress: 85 },
    { name: 'Linux', progress: 80 },
  ];

  databases = [
    { name: 'SQL Server', progress: 95 },
    { name: 'Azure SQL', progress: 95 },
    { name: 'SQL Server Profiler', progress: 90 },
    { name: 'Change Data Capture (CDC)', progress: 95 },
  ];


}
