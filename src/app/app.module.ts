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
import { MatDialogModule } from '@angular/material/dialog';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LottieComponent } from './lottie/lottie.component';
import { LottieModule } from 'ngx-lottie';
import { DynamicLottieComponent } from './dynamic-lottie/dynamic-lottie.component';
import { ThankYouDialogComponent } from './thank-you-dialog/thank-you-dialog.component';

export function playerFactory() {
  return import('lottie-web');
}
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
    WordCloudComponent,
    ChatDialogComponent,
    LottieComponent,
    DynamicLottieComponent,
    ThankYouDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    FormsModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
