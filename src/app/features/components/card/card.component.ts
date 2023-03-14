import {Component, Input, OnInit} from '@angular/core';
import {HotelDataModel} from "../../store/hotel.model";

@Component({
  selector: 'app-card',
  template: `
    <div class="card-container" [style.background-image]="'url(' + selectedBackgroundPhoto + ')'">
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
export class CardComponent implements OnInit {
  @Input() hotel: HotelDataModel | undefined;

  selectedBackgroundPhoto: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.selectedBackgroundPhoto = this.hotel?.cardBackground;
  }
}
