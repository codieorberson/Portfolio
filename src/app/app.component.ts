import { Component } from '@angular/core';
import { HealthcheckService } from './services/healthcheck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private healthcheckService: HealthcheckService) { }

  title = 'Portfolio';

  ngOnInit() {
    this.healthcheckService.startHealthCheck();
  }
}
