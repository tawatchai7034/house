import { Component, Input, OnInit } from '@angular/core';
import { HotelDataModel } from '../../store/hotel.model';
import { Router } from '@angular/router';
import slugify from 'slugify';

@Component({
  selector: 'app-filters-card',
  template: `
    <div class="filters-card-container">
      <div *ngIf="data.isLoading$ | async">Loading...</div>
      <!-- Filter -->
      <div class="accommodation-list">
        <section class="hotel section-container">
          <h6>Hotels</h6>
          <p>{{ data.hotelCount }} places</p>
        </section>
        <section class="motel section-container">
          <h6>Motels</h6>
          <p>{{ data.motelCount }} places</p>
        </section>
        <section class="resort section-container">
          <h6>Resorts</h6>
          <p>{{ data.resortCount }} places</p>
        </section>
      </div>
      <!--Showing Places-->
      <div class="show-places-container">
        <p>
          Showing 4 of <span>{{ data.totalCount }} places</span>
        </p>
        <p>Sort by <span>Recommended</span></p>
      </div>

      <!--Carts-->
      <div class="card-container" *ngFor="let hotel of hotels | slice : 0 : 4">
        <div class="card-photo">
          <img [src]="hotel?.cardBackground" alt="" />
        </div>
        <div class="card-items-container">
          <section class="card-title-price-container">
            <h4 class="card-title">{{ hotel.name }}</h4>
            <p class="card-price">
              Starting from
              <span class="card-price-amount">{{
                hotel.nightlyPrice | currency
              }}</span
              ><span class="card-price-unit"> /night</span>
            </p>
          </section>
          <section class="card-address">
            <img src="assets/icons/location.svg" alt="location_icon" />
            <p>{{ hotel.address }}</p>
          </section>
          <section class="card-rating">
            <p class="card-rating-value">{{ hotel.rating }}</p>
            <p class="card-rating-label"><span>Very Good</span> 371 reviews</p>
          </section>
          <br />
          <section class="card-buttons">
            <button class="card-button-icon">
              <img src="assets/icons/heart.svg" alt="heart_icon" />
            </button>
            <button class="card-button-view" (click)="viewPlace(hotel.name)">
              View Place
            </button>
          </section>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./filters-card.component.css'],
})
export class FiltersCardComponent implements OnInit {
  @Input() data: any;
  hotels: HotelDataModel[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.data.hotels$.subscribe((hotels: HotelDataModel[]) => {
      this.hotels = hotels;
    });
  }
  viewPlace(hotelName: string) {
    const slug = slugify(hotelName);
    this.router.navigate(['hotel-listing', slug]);
  }
}
