import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReferencesComponent } from './references/references.component';
import { SideProjectsComponent } from './side-projects/side-projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CvComponent } from './cv/cv.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SkillsCollageComponent } from './skills-collage/skills-collage.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { MovingWordsComponent } from './moving-words/moving-words.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ReferencesComponent,
    SideProjectsComponent,
    HomeCarouselComponent,
    CvComponent,
    ImageDialogComponent,
    SkillsCollageComponent,
    WordCloudComponent,
    MovingWordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
