import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-dynamic-lottie',
  templateUrl: './dynamic-lottie.component.html',
  styleUrls: ['./dynamic-lottie.component.scss']
})
export class DynamicLottieComponent {
  @Input() animationPath: string;
}
