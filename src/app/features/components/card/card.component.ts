import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div>
      <div>
        <section>
          <h6>Melbourne</h6>
          <p>An amazing journey</p>
        </section>
        <section>$ 700</section>
      </div>
      <button>Book a Hotel</button>
    </div>
  `,
  styleUrls: ['./card.component.css'],
})
export class CardComponent {}
