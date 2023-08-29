import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  telephone: string = '+1 314-305-4647';
  email: string = 'codieorberson@gmail.com';
}
