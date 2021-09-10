import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rl-angular-fundamental-training';

  constructor(
    private appService: AppService
  ) {
    this.getData();
  }

  async getData(): Promise<void> {
    console.log(await this.appService.getCurrentWeather());
  }

}
