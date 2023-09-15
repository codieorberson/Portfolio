import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private highlightInterval: any;
  private activeTab: string = 'home';
  ngOnInit(): void {
    this.highlightInterval = setInterval(() => {
      this.checkAndHighlightTab();
    }, 250);
  }

  ngOnDestroy(): void {
    if (this.highlightInterval) {
      clearInterval(this.highlightInterval);
    }
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    const header = document.getElementById("primary-header");

    if (section) {
      const yOffset = section.offsetTop - header.offsetHeight;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }

  getLottiePathForActiveTab(): string {
    return `assets/lotties/${this.activeTab}.json`;
  }

  private checkAndHighlightTab(): void {
    const sections = ['home', 'about', 'cv', 'skills', 'side-projects', 'contact'];
    const headerHeight = document.getElementById("primary-header").offsetHeight;

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerHeight && rect.bottom > headerHeight) {
          this.activeTab = sectionId;
        }
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });

    if (this.activeTab) {
      const activeLink = document.querySelector(`.nav-link[href="#${this.activeTab}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  }
}
