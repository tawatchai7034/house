import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <!-- Template Start -->

    <div class="content-container">
      <h3>Fall into travel</h3>
      <p>
        Going somewhere to celebrate this season? Whether you’re going home or
        somewhere to roam, we’ve got the travel tools to get you to your
        destination.
      </p>
      <app-card></app-card>
    </div>
    <!-- Template End -->
  `,
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {}
