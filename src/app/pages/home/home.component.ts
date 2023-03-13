import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- Template Start -->
    <div>
      <app-header></app-header>
      <app-search-bar style="position: relative; top: -150px;"></app-search-bar>
      <app-content></app-content>
      <app-newsletter style="position: relative; top: +150px;"></app-newsletter>
      <app-footer></app-footer>
    </div>
    <!-- Template End -->
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
