import { Component, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProfileService } from '../services/profile.service';
import { JobDetails } from '../models/JobDetails';
import { Jobs } from '../models/Jobs';
import { GroupedJobs } from '../models/GroupedJobs';
import { Hobbies } from '../models/Hobbies';



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
    this.loadAllJobDetails();
    this.loadAllHobbies();
  }

  jobs: Jobs[]
  allJobDetails: JobDetails[]
  activeJobDetails: JobDetails[]

  allHobbies: Hobbies[]
  activeHobbies: Hobbies[]
  groupedHobbies: { [key: string]: Hobbies[] } = {};
  Object = Object;
  componentBottom: number;
  isVisible = false;
  constructor(private el: ElementRef, private profileService: ProfileService) {}
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset

    if (scrollPosition + window.innerHeight >= componentPosition && scrollPosition <= this.componentBottom + 2000) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  loadAllJobDetails(): void {
    this.profileService.GetAllJobDetails().subscribe(data => {
      this.allJobDetails = data;
      const grouped = this.groupByPositionAndCompany(this.allJobDetails);
      this.jobs = Object.values(grouped);
    });
  }

  loadAllHobbies(): void{
    this.profileService.GetAllHobbies().subscribe(data => {
      this.allHobbies = data;
      this.activeHobbies = this.allHobbies.filter(x=>x.Active);
      this.groupHobbiesByCategory();

    });
  }

  groupHobbiesByCategory(): void {
    this.activeHobbies.forEach(hobby => {
      if (!this.groupedHobbies[hobby.Category]) {
        this.groupedHobbies[hobby.Category] = [];
      }
      this.groupedHobbies[hobby.Category].push(hobby);
    });
  }

  groupByPositionAndCompany(jobDetails: JobDetails[]): GroupedJobs {
    return jobDetails.reduce((acc: GroupedJobs, jobDetail) => {
      const key = `${jobDetail.Position}-${jobDetail.Company}`;
      if (!acc[key]) {
        acc[key] = {
          Company: jobDetail.Company,
          Position: jobDetail.Position,
          AllDetails: [],
          Active: jobDetail.Active,
          Years: jobDetail.Years,
          ButtonText: "+ Details",
          ShowDetails: false
        };
      }
      acc[key].AllDetails.push(jobDetail.Detail);
      return acc;
    }, {});
}



  toggleDetails(job: Jobs): void {
    job.ShowDetails = !job.ShowDetails;
    job.ButtonText = job.ButtonText ? '- Details' : '+ Details';
  }
}
