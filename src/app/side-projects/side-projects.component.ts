import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import { Component, HostListener, ElementRef } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Projects } from '../models/Projects';


@Component({
  selector: 'app-side-projects',
  templateUrl: './side-projects.component.html',
  styleUrls: ['./side-projects.component.scss'],
  animations: [
    trigger('slideIn', [
      transition('* => *', [
        query(':enter',
          style({ opacity: 0, transform: 'translateY(100%)' }),
          { optional: true }
        ),
        query(':enter',
          stagger('300ms', [
            animate('500ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ]),
          { optional: true }
        )
      ]),
    ])
  ]
})
export class SideProjectsComponent {
  ngOnInit(){
    this.loadAllProjects()
  }
  allProjects: Projects[];
  activeProjects: Projects[];
  shouldAnimate = false;
  componentBottom: number;

  constructor(private el: ElementRef,  private profileService: ProfileService) { this.componentBottom = 0}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight;

    if (scrollPosition >= componentPosition) {
      this.shouldAnimate = true;
    } else {
      this.shouldAnimate = false;
      this.activeProjects = [...this.activeProjects];
    }
  }


  loadAllProjects(): void {
    this.profileService.GetAllProjects().subscribe(
      data => {
        this.allProjects = data.map(project => ({
          ...project,
          showDescription: false,
          detailsButtonText: "+ Details"
        }));
        this.activeProjects = this.allProjects.filter(x=>x.Active);
      }
    );
  }


  goToSourceCode(link: string) {
    window.open(link, "_blank");
  }

  showProjectDetails(project: any) {
    project.showDescription = !project.showDescription;
    project.detailsButtonText = project.showDescription ? "- Details" : "+ Details";

  }
}
