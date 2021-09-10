import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http: HttpClient) { }

  async get(url: string): Promise<any> {
    let result = null;

    await this.http
      .get(encodeURI(url))
      .toPromise()
      .then((response) => {
        result = response;
      })
      .catch((err) => {
        result = { error: err as Response };
      });

    return result;
  }

  async getCurrentWeather(): Promise<any> {
    const result = await this.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appId=91c457c8b6a8a53a027294521c18e845');
    return result;
  }

  convertToString(a: number): string {
    return a.toString();
  }

  multiplication(a: number, b: number): number {
    return a * b;
  }
}
