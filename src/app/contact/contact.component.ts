import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { EmailService } from '../services/email.service';
import { EmailMessage } from '../models/EmailMessage';
import { MatDialog } from '@angular/material/dialog';
import { ThankYouDialogComponent } from '../thank-you-dialog/thank-you-dialog.component';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('slideInBottom', [
      state('void', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      state('*', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => *', animate('1000ms ease-out'))
    ])
  ]
})
export class ContactComponent {
  componentBottom: number;
  isVisible = false;


  ngOnInit() {
    this.componentBottom = this.el.nativeElement.offsetTop + this.el.nativeElement.clientHeight;
  }

  constructor(private emailService: EmailService, private dialog: MatDialog, private el: ElementRef) {this.componentBottom = 0}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
  const scrollPosition = window.pageYOffset + window.innerHeight;

    if (scrollPosition >= componentPosition) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }


  telephone: string = '314-305-4647';
  email: string = 'codieorberson@gmail.com';
  emailMessage: EmailMessage = {
    Subject: '',
    From: '',
    Body: '',
    To: ''
  };

  from: string = '';
  subject: string = 'Connection Request from Codie Orberson\'s Portfolio';
  message: string = '';

  clearForm() {
      this.from = '';
      this.subject = 'Connection Request from Codie Orberson\'s Portfolio';
      this.message = '';
  }

  sendEmail(){
    console.log(this.subject)
    this.emailMessage.Subject = this.subject;
    this.emailMessage.From = this.from;
    this.emailMessage.Body = this.message;
    console.log(this.emailMessage)
    this.emailService.SendQuestion(this.emailMessage).subscribe(
      data => {
        if(data){
          this.dialog.open(ThankYouDialogComponent, {
            hasBackdrop: false

          });
          this.clearForm();
        }
        else{

        }
      }
    );
  }
}
