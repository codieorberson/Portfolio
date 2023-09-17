import { Component, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Skills } from '../models/Skills';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('slideIn', [
      state('left', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      state('right', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      state('*', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('left => *', animate('1000ms ease-out')),
      transition('right => *', animate('1000ms ease-out'))
    ])
  ]
})
export class SkillsComponent {

  ngOnInit() {
    this.componentBottom = this.el.nativeElement.offsetTop + this.el.nativeElement.clientHeight;
    this.loadAllSkills();
  }
  skillsWordCloud: { text: string; size: number; color: string; }[] = [];

  allSkills: Skills[];
  activeSkills: Skills[];
  groupedSkills: { type: string, color: string, skills: Skills[] }[] = [];


  componentBottom: number;
  isVisible = false;
  constructor(private el: ElementRef, private profileService: ProfileService) { this.componentBottom = 0}
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset

    if (scrollPosition + window.innerHeight - 100 >= this.el.nativeElement.offsetTop && scrollPosition <= this.componentBottom + 3000) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  groupSkillsByType(){
    const skillGroups = new Map<string, { type: string, color: string, skills: Skills[] }>();

    this.activeSkills.forEach(skill => {
        if (!skillGroups.has(skill.Type)) {
            skillGroups.set(skill.Type, { type: skill.Type, color: skill.Color, skills: [] });
        }
        skillGroups.get(skill.Type)!.skills.push(skill);
    });

    this.groupedSkills = Array.from(skillGroups.values());
  }

  getAnimationState(index: number): string {
    return this.isVisible ? '*' : (index % 2 === 0 ? 'left' : 'right');
  }

  loadAllSkills(): void {
    this.profileService.GetAllSkills().subscribe(
      data => {
        this.allSkills = data;
        this.activeSkills = this.allSkills.filter(skill => skill.Active)
        this.SetSkillsWordCloud();
        this.groupSkillsByType();
      }
    );
  }

  SetSkillsWordCloud(){
    let all: { text: string; size: number; color: string; }[] = [];
    this.activeSkills.forEach(skill=>{
      all.push({
        text: skill.Name,
        size: skill.ProgressPercentage,
        color : skill.Color
      })
    })
    this.skillsWordCloud = all;
  }
}
