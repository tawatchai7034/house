import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/core/models/app-state.model';
import { ActivatedRoute, Router } from '@angular/router';
import slugify from 'slugify';

@Component({
  selector: 'app-hotel-details',
  template: `
    <!-- Template Start -->
    <app-navbar class="active"></app-navbar>

    <!-- Hotel Details -->

    <div class="hotel-details-container">
      <div class="hotel-info-container">
        <div class="hotel-title">
          <p class="hotel-title-text">{{ hotel.name }}</p>
        </div>
        <div class="address-container">
          <div class="location">
            <img src="assets/icons/location.svg" alt="location-icon" />
          </div>
          <p>
            {{ hotel.address }}
          </p>
        </div>
        <div class="hotel-title-and-rating">
          <div class="rating">
            <span>{{ hotel.rating }}</span>
          </div>
          <span>
            <strong>Very Good</strong>
            371 reviews
          </span>
        </div>
      </div>
      <div class="button-container">
        <div class="price-container">
          <p>
            <strong>{{ hotel.nightlyPrice | currency }}</strong
            >/night
          </p>
        </div>
        <div class="buttons-container">
          <button class="button-small">
            <img src="assets/icons/heart.svg" alt="heart-icon" />
          </button>
          <button class="button-small">
            <img src="assets/icons/share.svg" alt="share-icon" />
          </button>
          <button class="button-book" (click)="scrollToRoomsHeader()">
            Book now
          </button>
        </div>
      </div>
    </div>
    <!-- Hotel Details -->
    <div class="hotel-photo-container">
      <img alt="" class="big-image" [src]="hotel?.photos[0]" />
      <div class="small-images">
        <img alt="" class="img" [src]="hotel?.photos[1]" />
        <img alt="" class="img-top-right" [src]="hotel?.photos[2]" />
        <img alt="" class="img" [src]="hotel?.photos[3]" />
        <img alt="" class="img-top-left" [src]="hotel?.photos[4]" />

        <div class="flex-wrapper-one">
          <button>View All Photos</button>
        </div>
      </div>
    </div>
    <div class="hotel-overview">
      <div class="overview-frame">
        <p class="overview-title">Overview</p>
        <p class="overview-description">
          {{ hotel.overview }}
        </p>
      </div>
      <div class="rating-container">
        <div class="rating-box">
          <p class="rating-score">{{ hotel.rating }}</p>
          <div class="rating-info">
            <span class="rating-text">
              <strong>Very good</strong>
            </span>
            <p class="rating-count">371 reviews</p>
          </div>
        </div>
        <div *ngFor="let category of categories" class="rating-category">
          <div class="stars">
            <img src="assets/icons/Stars.svg" alt="stars" />
          </div>
          <p>{{ category }}</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="avaiable-rooms-container">
      <div class="rooms-header" #roomsHeader>
        <p>Avaiable Rooms</p>
      </div>
      <div *ngFor="let room of hotel.rooms" class="rooms-details-container">
        <div class="rooms-name">
          <img [src]="hotel.photos[0]" alt="" />
          <span>{{ room.name }}</span>
        </div>
        <div class="rooms-price">
          <span>{{ room.price | currency }} </span>/night
          <button (click)="bookRoom(room)">Book now</button>
        </div>
      </div>
    </div>
    <hr />
    <div class="amenities-container">
      <div class="amenities-header">
        <p>Amenities</p>
      </div>
      <div *ngFor="let amenities of hotel.amenities" class="amenities">
        {{ amenities }}
      </div>
    </div>

    <app-newsletter style="position: relative; top: +240px;"></app-newsletter>
    <app-footer></app-footer>
    <!-- Template End -->
  `,

  styleUrls: ['./hotel-details.component.css'],
})
export class HotelDetailsComponent implements OnInit {
  hotel: any;
  categories: string[] = [];
  @ViewChild('roomsHeader') roomsHeader!: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('name');
      this.store.select('hotels').subscribe((state) => {
        this.hotel = state.hotels.find((h) => slugify(h.name) === slug);

        if (this.hotel && this.hotel.amenities) {
          this.categories = this.hotel.amenities.slice(0, 4);
        }
      });
    });
  }
  bookRoom(room: any) {
    localStorage.setItem('roomName', room.name);
    localStorage.setItem('roomPrice', room.price.toString());
    localStorage.setItem('hotelName', this.hotel.name);
    this.router.navigate(['/payment']);
  }
  scrollToRoomsHeader() {
    this.roomsHeader.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
