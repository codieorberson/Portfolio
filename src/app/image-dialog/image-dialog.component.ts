import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  template: `
    <img [src]="data.imageUrl" class="full-image">
  `,
  styles: [`
    .full-image {
      max-width: 100%;
      max-height: 100vh;
    }
  `]
})
export class ImageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { imageUrl: string }) {}
}
