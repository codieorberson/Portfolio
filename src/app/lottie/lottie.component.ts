import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-lottie',
  templateUrl: './lottie.component.html',
  styleUrls: ['./lottie.component.scss']
})
export class LottieComponent {
  @Input() lottieOptions: { path: string };
}
