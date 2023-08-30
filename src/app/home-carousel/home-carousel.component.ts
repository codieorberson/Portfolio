import { OnInit , Component } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit {
  titles = ['Full-Stack', '.NET', 'Angular', 'Azure', 'SQL Server'];
  currentTitle = '';
  currentWordIndex = 0;
  typingIndex = 0;
  isDeleting = false;

  images = [
    '/assets/images/deathvalley.jpg',
    '/assets/images/grandcanyon.jpg',
    '/assets/images/horseshoe.jpg',
    '/assets/images/zion.jpg'
  ];
  currentPictureIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentPictureIndex = (this.currentPictureIndex + 1) % this.images.length;
    }, 3000);
    this.type();
  }

  type() {
    const currentWord = this.titles[this.currentWordIndex];
    if (this.isDeleting) {
      this.currentTitle = currentWord.substring(0, this.typingIndex - 1);
      this.typingIndex--;
    } else {
      this.currentTitle = currentWord.substring(0, this.typingIndex + 1);
      this.typingIndex++;
    }

    if (!this.isDeleting && this.typingIndex === currentWord.length) {
      setTimeout(() => {
        this.isDeleting = true;
      }, 1000);
    } else if (this.isDeleting && this.typingIndex === 0) {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.titles.length;
    }

    const typingSpeed = this.isDeleting ? 100 : 200;
    setTimeout(() => this.type(), typingSpeed);
}

}
