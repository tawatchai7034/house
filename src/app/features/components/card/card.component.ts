import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card-container">
      <div class="card-content-container">
        <section class="card-content">
          <h6>Melbourne</h6>
          <p>An amazing journey</p>
        </section>
        <section class="card-price">$ 700</section>
      </div>
      <button>Book a Hotel</button>
    </div>
  `,
  styleUrls: ['./card.component.css'],
})
export class CardComponent {}
