import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';

}
