import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import { Component, HostListener, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


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
  shouldAnimate = false;

  constructor(private el: ElementRef, private dialog: MatDialog) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight;

    if (scrollPosition >= componentPosition) {
      this.shouldAnimate = true;
    } else {
      this.shouldAnimate = false;
      this.projects = [...this.projects];
    }
  }
  projects = [
    {
      name: "Database Migration Validator",
      imageUrl: "/assets/images/db-migration.jpg",
      technologies: [".NET 6 App Service"],
      sourceCodeLink: "https://github.com/codieorberson/DBMigration",
      showDescription: false,
      detailsButtonText: "+ Details",
      year: "2022",
      description: "A specialized tool designed to ensure seamless database migrations. Drawing inspiration from Redgate Tools, this utility conducts a thorough comparison between source and destination databases, verifying the successful transfer of views, stored procedures, SQL DB user permissions, and more. Integral to the migration process, it confirms the validity of ETL jobs and acts as a safeguard against data and structural discrepancies."
    },
    {
      name: "Salesforce .NET API Connector",
      imageUrl: "/assets/images/salesforce-api.jpg",
      technologies: [".NET Standard Nuget, REST API"],
      sourceCodeLink: "https://github.com/codieorberson/SalesforceAPI",
      showDescription: false,
      detailsButtonText: "+ Details",
      year: "2022-2023",
      description: "This NuGet package simplifies Salesforce integrations for .NET developers. Offering robust CRUD operations on Salesforce objects, the package also seamlessly retrieves appropriate picklist values. It's a must-have tool for those seeking a .NET-centric approach to harness the power of Salesforce without the typical integration hurdles."
    },
    {
      name: "Stock Portfolio Manager",
      imageUrl: "/assets/images/stocks-project.jpg",
      technologies: ["Python Flask", "Angular"],
      sourceCodeLink: "https://github.com/codieorberson/StocksService",
      showDescription: false,
      detailsButtonText: "+ Details",
      year: "2023",
      description: "This cutting-edge portfolio manager provides investors with a holistic stock market experience. Harness AI-driven insights from real-time news feeds, integrated via Yahoo APIs, to make data-backed decisions. Easily track investments, engage in trades using Robinhood API integrations, and perform comprehensive stock lookups. A must-have digital companion for both beginners and seasoned investors keen on achieving maximized financial success."
    },
    {
      name: "Chat-GPT 3.5 Interactive Assistant",
      imageUrl: "/assets/images/chatgpt.jpg",
      technologies: ["Python Flask", "Angular"],
      sourceCodeLink: "https://github.com/codieorberson/StocksService",
      showDescription: false,
      detailsButtonText: "+ Details",
      year: "2023",
      description: "This application taps into state-of-the-art pip packages in Python. More than a mere chatbot, this project fetches finely-tuned responses and dynamically generates imagery upon request. Furthermore, through meticulous fine-tuning processes, the system is continually trained with new data, ensuring answers are not only accurate but also contextually relevant. A groundbreaking blend of AI conversation and visual generation, designed for those seeking next-level interactivity."
    },
    {
      name: "Personal Portfolio Site",
      imageUrl: "/assets/images/portfolio-project.jpg",
      technologies: ["Angular", "Azure Storage Container"],
      sourceCodeLink: "https://github.com/codieorberson/Portfolio",
      showDescription: false,
      detailsButtonText: "+ Details",
      year: "2023",
      description: "This personal website serves as a comprehensive digital showcase of my professional journey. From an intuitive 'About' section that narrates my passions and interests, to a detailed 'Skills' segment highlighting my technical proficiencies, every corner of the site tells a part of my story. The 'Projects' area delves deep into the works I'm most proud of, and the 'CV' section provides a concise overview of my career trajectory. For those wishing to connect or collaborate, the 'Contact' section makes reaching out a breeze. An all-in-one platform that encapsulates the essence of my professional identity."
    },
    {
      name: "Mobile Color Manipulator App",
      imageUrl: "/assets/images/color-manipulator.jpg",
      technologies: ["Kotlin", "Android Studio"],
      sourceCodeLink: "https://github.com/codieorberson/ColorManipulator",
      showDescription: false,
      detailsButtonText: "+ Details",
      year: "2019",
      description: "Sleek mobile application designed for every hue enthusiast. Whether you're a designer or just someone who loves playing with colors, this app offers an intuitive UI to effortlessly pick HEX and RGB values. But that's not all – it goes beyond just color selection. With its comparison feature, users can juxtapose two or more shades, making it a breeze to choose the perfect palette. A meld of utility and aesthetics, 'Color Manipulator' is your pocket color studio, empowering you to craft and compare shades on the go."
    },
    {
      name: "LeetCode Challenger",
      imageUrl: "/assets/images/leetcode.jpg",
      technologies: [".Net 6 App Service"],
      sourceCodeLink: "https://github.com/codieorberson/LeetCode",
      showDescription: false,
      detailsButtonText: "+ Details",
      year: "2023",
      description: "Innovative app service designed for the driven coder aiming to conquer coding challenges. Seamlessly browse through a curated list of problems ranging from easy to hard, tailored to push your coding limits. But it doesn't stop there – dive deep into solutions, experiment with approaches, and put them to the test with built-in validation. With a dedicated environment for crafting test cases, you ensure that your solutions are not just correct, but robust. Whether you're preparing for an interview or honing your skills, 'LeetCode Challenger' is your virtual coding arena, driving you one solution closer to coding mastery."
    },
    {
      name: "NVSHR: Empowering Silence through AI",
      imageUrl: "/assets/images/rp.jpg",
      technologies: ["Python, Raspberry Pi"],
      sourceCodeLink: "https://github.com/codieorberson/RP_NVSHR",
      showDescription: false,
      detailsButtonText: "+ Details",
      year: "2020",
      description: "This Python-driven project harnessed the power of AI to masterfully train a system in recognizing a myriad of hand gestures. Designed specifically to assist individuals with speech impairments, this system empowers users to effortlessly control smart home devices using just their hand movements. Remarkably, the entire setup, which combines sophisticated AI algorithms with real-time responsiveness, runs seamlessly on a 4 GB Raspberry Pi, showcasing not just innovation but also efficient optimization."
    },
    {
      name: "RGB Platform Game: Pixels and Colors",
      imageUrl: "/assets/images/rgb-game.jpg",
      technologies: ["Processing, Jupyter"],
      sourceCodeLink: "https://github.com/HoviJ/CSC545-Platforming-Game",
      showDescription: false,
      detailsButtonText: "+ Details",
      year: "2020",
      description: "Dive into the world of 'RGB Platform Game,'' an innovative game crafted using Processing, where the vibrant palette of an image transforms into an exhilarating gaming experience. Players begin by uploading a picture, which is then meticulously analyzed to map each pixel to its closest RGB counterpart. These color pixels shape the game's terrain. You, as the avatar, navigate this pixelated landscape on a quest to reach the goal. But here's the twist: press 'R', and only the red elements come to life; hit 'G', and the world turns green; with 'B', bask in the blue. Each color key offers unique challenges and paths, making gameplay an ever-evolving dance of strategy, observation, and reflexes."
    }
  ];




  goToSourceCode(link: string) {
    window.open(link, "_blank");
  }

  showProjectDetails(project: any) {
    project.showDescription = !project.showDescription;
    project.detailsButtonText = project.showDescription ? "- Details" : "+ Details";

  }
}
