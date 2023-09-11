import { Component, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
  }

  componentBottom: number;
  isVisible = false;
  constructor(private el: ElementRef) { this.componentBottom = 0}
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset

    if (scrollPosition + window.innerHeight - 100 >= this.el.nativeElement.offsetTop && scrollPosition <= this.componentBottom + 1500) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  languages = [
    { name: '.NET', yearsExperience: 4, progress: 95, details: '.NET Standard 2.0-2.1, .NET Framework 3.5-4.8, .NETCore 2.2 - 3.1, .NET 5 - 7' },
    { name: 'Angular', yearsExperience: 4, progress: 90, details: 'AngularJS (1.x) and Angular 7-15, including reactive programming and RxJS.' },
    { name: 'Python', yearsExperience: 4, progress: 85, details: 'Experience with Python 2.x and 3.x. Familiar with frameworks like Django and Flask.' },
    { name: 'Pulumi', yearsExperience: 3, progress: 90, details: 'Infrastructure as Code tool for creating, deploying, and managing cloud infrastructure across Azure Resources.' },
    { name: 'Java', yearsExperience: 2, progress: 80, details: 'Experience with Java SE and EE, along with frameworks like Spring Boot and Maven.' },
    { name: 'JavaScript', yearsExperience: 4, progress: 90, details: 'ES5, ES6+ features, asynchronous operations with Promises, async/await, and AJAX requests.' },
    { name: 'Apex', yearsExperience: 2, progress: 75, details: 'Salesforce Apex programming for triggers, batch jobs, and integration with Salesforce Lightning.' },
];

  servers = [
    { name: 'Azure', yearsExperience: 4, progress: 95, details: 'Microsofts cloud computing platform providing a variety of cloud services, including compute, analytics, storage, and networking.' },
    { name: 'Windows', yearsExperience: 4, progress: 90, details: 'Microsoft Windows server operating systems used for enterprise environments, familiar with Active Directory, IIS, and other server roles.' },
    { name: 'PCF', yearsExperience: 3, progress: 85, details: 'Pivotal Cloud Foundry: A cloud-native platform for deploying and scaling applications, with support for containers and microservices architectures.' },
    { name: 'Linux', yearsExperience: 4, progress: 80, details: 'Open-source Unix-like operating system. Experience in configuring, managing, and maintaining Linux servers, familiar with distributions like Ubuntu, and Raspbian.' },
    { name: 'Salesforce', yearsExperience: 3, progress: 95, details: 'Managed Salesforce integrations, specializing in REST/SOAP services and utilizing ADF to synchronize on-prem data, while ensuring the security of databases that depend on Salesforce data.' },
    { name: 'Okta', yearsExperience: 3, progress: 95, details: 'Team Manages SSO using Okta, with proficiency in Okta Workflows, branding, and the integration of Event Hooks.' },
    { name: 'Azure Data Factory', yearsExperience: 3, progress: 95, details: 'Data integration service in Azure that enables hybrid ETL, ELT, and data integration scenarios.' },

  ];

  databases = [
    { name: 'SQL Server', yearsExperience: 4, progress: 95, details: 'Experienced in designing, querying, and optimizing databases, working with stored procedures, triggers, and complex objects.' },
    { name: 'Azure SQL', yearsExperience: 3, progress: 95, details: 'Skilled in deploying, scaling, and monitoring Azure SQL databases.' },
    { name: 'SQL Server Profiler', yearsExperience: 3, progress: 90, details: 'A tool for monitoring and diagnosing SQL Server performance issues. Familiar with capturing and analyzing SQL Server events.' },
    { name: 'Change Data Capture (CDC)', yearsExperience: 3, progress: 95, details: 'A feature in SQL Server for capturing insertions, updates, and deletions applied to SQL Server tables, and making this change data available within an Azure Service Bus' },
  ];

  cicd = [
    { name: 'Docker', yearsExperience: 3, progress: 95, details:  "Proficient in containerization using Docker, optimizing application deployment, and managing containerized services." },
    { name: 'ADO (Azure DevOps)', yearsExperience: 4, progress: 95, details: 'Experienced with Azure DevOps (ADO) for continuous integration and delivery, source code management, and agile project tracking.' },
    { name: 'Jenkins', yearsExperience: 3, progress: 90, details: 'Well-acquainted with Jenkins for building, testing, and deploying code automatically, ensuring streamlined CI/CD pipelines.' },
    { name: 'Octopus', yearsExperience: 3, progress: 95, details: 'Skilled in using Octopus Deploy for automated deployment and release management, facilitating smooth software delivery processes.' },
  ];

  apiTesting = [
    { name: 'Postman', yearsExperience: 2, progress: 90, details: 'Proficient in using Postman for API testing, database design, and optimizing complex database operations.' },
    { name: 'Insomnia', yearsExperience: 3, progress: 95, details: 'Expertise in leveraging Insomnia for API testing and monitoring Azure SQL databases.' },
    { name: 'Soap UI', yearsExperience: 3, progress: 90, details: 'Skilled in utilizing Soap UI for SQL Server performance diagnosis and event analysis.' },
    { name: 'REST / SOAP', yearsExperience: 5, progress: 90, details: 'Developed both RESTful and SOAP APIs with tools including Postman and Insomnia.' },
    { name: 'Swagger', yearsExperience: 3, progress: 90, details: 'Experienced in using Swagger for API specification, documentation generation, and SDK development.' },
    { name: 'Blazor', yearsExperience: 3,  progress: 80, details: 'Adept at using Blazor for CI/CD, build pipeline management, and automation tasks.' },
  ];

  unitTesting = [
    { name: 'NUnit', yearsExperience: 4, progress: 95, details: 'Proficient in utilizing NUnit for robust backend .NET testing, ensuring system reliability and optimizing code performance' },
    { name: 'LINQPad', yearsExperience: 4, progress: 95, details: 'Proficient in leveraging LINQPad for rapid testing and optimization of LINQ queries and quick .NET coding tasks, bypassing the need for extensive IDE setup.' },
    { name: 'Moq', yearsExperience: 3, progress: 95, details: 'Experienced in leveraging Moq for effective mocking during unit tests, simulating external dependencies and ensuring isolated testing scenarios in .NET applications.' },
    { name: 'MSTest', yearsExperience: 3, progress: 90, details: 'Proficient with MSTest for creating, executing, and analyzing unit tests within .NET applications, ensuring code reliability and quality through systematic testing practices.' },
    { name: 'Cypress', yearsExperience: 3, progress: 90, details: 'Proficient in using Cypress for end-to-end testing of Angular applications, ensuring robust and responsive frontend performance.' },
    { name: 'Karma / Jasmine', yearsExperience: 3, progress: 90, details: 'Experienced in leveraging Karma and Jasmine for unit testing Angular components, ensuring code quality and functionality consistency.' },
  ];

  allSkills = [
    { name: 'Programming Languages', skills: this.languages, color: '#4CAF50' },
    { name: 'Cloud & Server Platforms', skills: this.servers, color: '#03A9F4' },
    { name: 'Databases', skills: this.databases, color: '#9C27B0' },
    { name: 'DevOps & CI/CD', skills: this.cicd, color: '#FF9800' },
    { name: 'API Testing', skills: this.apiTesting, color: 'teal' },
    { name: 'Unit Testing', skills: this.unitTesting, color: '#C04000' },

  ];

  getAnimationState(index: number): string {
    return this.isVisible ? '*' : (index % 2 === 0 ? 'left' : 'right');
  }

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
}
