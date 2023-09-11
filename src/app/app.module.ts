import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FormsModule } from '@angular/forms';

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
    WordCloudComponent,
    ChatDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
