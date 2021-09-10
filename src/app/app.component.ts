import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rl-angular-fundamental-training';
  input = '';
  today = new Date();
  showTraining = false;
  array = new Array(5).fill(0);

  constructor(
    private appService: AppService
  ) {
    this.getData();
  }

  async getData(): Promise<void> {
    console.log(await this.appService.getCurrentWeather());
  }

  onInputChange(): void {
    console.log(this.input);
  }

  onClick(): void {
    console.log('button is clicked');
    this.input = 'clicked';
  }

  toggleTraining(): void {
    this.showTraining = !this.showTraining;
  }

}
