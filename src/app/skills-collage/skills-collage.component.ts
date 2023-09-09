import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-collage',
  templateUrl: './skills-collage.component.html',
  styleUrls: ['./skills-collage.component.scss']
})
export class SkillsCollageComponent implements OnInit {

  langColor = '#4CAF50';
  toolsColor = '#FF9800';
  serversColor = '#03A9F4';
  databasesColor = '#9C27B0';

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

  allSkills = [
    { name: 'Languages', skills: this.languages, color: '#4CAF50' },
    { name: 'Tools', skills: this.tools, color: '#FF9800' },
    { name: 'Servers', skills: this.servers, color: '#03A9F4' },
    { name: 'Databases', skills: this.databases, color: '#9C27B0' }
  ];

  get flattenedSkills() {
    let all: { text: string; size: number; color: string; }[] = [];
    this.allSkills.forEach(category => {
      category.skills.forEach(skill => {
        all.push({
          text: skill.name,
          size: skill.progress,
          color: category.color
        });
      });
    });
    return all;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
