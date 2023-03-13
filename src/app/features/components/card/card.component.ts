import {Component, Input} from '@angular/core';
import {HotelDataModel} from "../../store/hotel.model";

@Component({
  selector: 'app-card',
  template: `
    <div class="card-container">
      <div class="card-content-container">
        <section class="card-content">
          <h6>{{hotel?.name}}</h6>
          <p>An amazing journey</p>
        </section>
        <section class="card-price">{{hotel?.nightlyPrice  | currency}}</section>
      </div>
      <button>Book a Hotel</button>
    </div>

  `,
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() hotel: HotelDataModel | undefined;

  constructor() {}

}
