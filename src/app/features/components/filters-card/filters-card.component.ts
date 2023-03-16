import {Component, Input, OnInit} from '@angular/core';
import {HotelDataModel} from "../../store/hotel.model";

@Component({
  selector: 'app-filters-card',
  template: `
    <div class="filters-card-container">
      <div *ngIf="data.isLoading$ | async">
        Loading...
      </div>
      <!-- Filter -->
      <div class="accommodation-list">
        <section
          class="hotel section-container">
          <h6>Hotels</h6>
          <p>{{data.hotelCount}} places</p>
        </section>
        <section class="motel section-container">
          <h6>Motels</h6>
          <p>{{data.motelCount}} places</p>
        </section>
        <section class="resort section-container">
          <h6>Resorts</h6>
          <p>{{data.resortCount}} places</p>
        </section>
      </div>
      <!--Showing Places-->
      <div class="show-places-container">
        <p>Showing 4 of <span>{{data.totalCount}} places</span></p>
        <p>Sort by <span>Recommended</span></p>
      </div>

      <!--Carts-->
      <div class="card-container" *ngFor="let hotel of hotels | slice: 0:4">
        <div class="card-photo">
          <img
            [src]="hotel?.cardBackground"
            alt="">
        </div>
        <div class="card-items-container">
          <section class="card-title-price-container">
            <h4 class="card-title">{{hotel.name}}</h4>
            <p class="card-price"> Starting from <span
              class="card-price-amount">{{hotel.nightlyPrice | currency}}</span><span
              class="card-price-unit"> /night</span></p>
          </section>
          <section class="card-address">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt"
                 viewBox="0 0 16 16">
              <path
                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            <p> {{hotel.address}}</p>
          </section>
          <section class="card-rating">
            <p class="card-rating-value">{{hotel.rating}}</p>
            <p class="card-rating-label"><span>Very Good</span> 371 reviews</p>
          </section>
          <br>
          <section class="card-buttons">
            <button class="card-button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>
            </button>
            <button class="card-button-view">View Place</button>
          </section>
        </div>
      </div>
    </div>

  `,
  styleUrls: ['./filters-card.component.css']
})
export class FiltersCardComponent implements OnInit {
  @Input() data: any;
  hotels: HotelDataModel[] = [];

  constructor() {
  }

  ngOnInit() {
    this.data.hotels$.subscribe((hotels: HotelDataModel[]) => {
      this.hotels = hotels;
    });
  }
}
