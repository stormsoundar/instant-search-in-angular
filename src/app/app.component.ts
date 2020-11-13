import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public searchInput; string;
  public programmingLanguages = [
    'Python','TypeScript','C','C++','Java',
    'Go','JavaScript','PHP','Ruby','Swift','Kotlin'
  ];
}
