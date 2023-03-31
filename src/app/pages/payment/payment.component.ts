import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/core/models/app-state.model';
import { loggedInUserSelector } from 'src/app/features/auth/store/auth.selectors';

@Component({
  selector: 'app-payment',
  template: `
    <!-- Template Start -->
    <app-navbar class="active"></app-navbar>
    <div class="payment-container">
      <div class="payment-info-container">
        <!-- Room information section -->
        <div class="room-info">
          <span class="room-name">{{ room?.name }}</span>
          <p class="room-price">
            <span>{{ room?.price | currency }}</span> /night
          </p>
        </div>

        <!-- Hotel information section -->
        <div class="hotel-info">
          <div class="hotel-name">{{ hotel.name }}</div>
          <div class="hotel-address">
            <img src="/assets/icons/location.svg" alt="" />
            <span> {{ hotel.address }}</span>
          </div>
        </div>

        <!-- Check-in and check-out section -->
        <div class="check-in-out">
          <section class="check-in">
            <p class="check-in-label">Giriş tarihi</p>
            <span class="check-in-date">Check-In</span>
          </section>
          <section class="hotel-photo">
            <img class="photo" src="/assets/icons/hotel.svg" alt="" />
          </section>
          <section class="check-out">
            <p class="check-out-label">Çıkış tarihi</p>
            <span class="check-out-date">Check-Out</span>
          </section>
        </div>
        <ng-container
          *ngIf="loggedInUser$ | async as loggedInUser; else notLoggedIn"
        >
          <div class="cc-container">
            <span>**** 4321 02/27</span>
          </div>
        </ng-container>

        <ng-template #notLoggedIn>
          <div class="login-signup-container">
            <span class="login-signup-text">Login or Sign up</span>
            <button class="login-button" routerLink="/login">Login</button>
            <button class="signup-button" routerLink="/sign-up">Sign up</button>
          </div>
        </ng-template>
      </div>
      <div class="card-container">
        <div class="card-hotel-card">
          <div class="card-hotel-image-info">
            <img
              [src]="hotel.photos[0]"
              alt="hotel-image"
              class="card-hotel-image"
            />
            <div class="card-hotel-info">
              <p class="card-hotel-name">{{ hotel?.name }}</p>
              <p class="card-hotel-room-name">{{ room?.name }}</p>
              <section class="card-hotel-rating">
                <span class="rating-score">{{ hotel.rating }}</span>
                <span class="rating-text"
                  ><strong>Very good</strong> 54 reviews</span
                >
              </section>
            </div>
          </div>
          <p class="price-details-text">Price Details</p>
          <div class="price-details">
            <div class="price-labels">
              <span>Base Fare</span>
              <span>Discount</span>
              <span>Taxes</span>
              <span>Service Fee</span>
              <span>Total</span>
            </div>
            <div class="price-values">
              <span>$240</span>
              <span>$0</span>
              <span>$20</span>
              <span>$5</span>
              <span>$265</span>
            </div>
          </div>
          <ng-container
            *ngIf="loggedInUser$ | async as loggedInUser; else notLoggedInPay"
          >
            <div class="pay-button-container">
              <button>Pay now</button>
            </div>
          </ng-container>

          <ng-template #notLoggedInPay> </ng-template>
        </div>
      </div>
    </div>
    <app-newsletter style="position: relative; top: +240px;"></app-newsletter>
    <app-footer></app-footer>
    <!-- Template End -->
  `,
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  room: any;
  hotel: any;

  loggedInUser$ = this.store.select(loggedInUserSelector);

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit() {
    const storedHotelName = localStorage.getItem('hotelName');
    const storedRoomName = localStorage.getItem('roomName');
    const storedRoomPrice = localStorage.getItem('roomPrice');
    if (storedHotelName && storedRoomName && storedRoomPrice) {
      this.room = {
        name: storedRoomName,
        price: Number(storedRoomPrice),
      };
      this.store.select('hotels').subscribe((state) => {
        this.hotel = state.hotels.find((h) => h.name === storedHotelName);
      });
    }
  }
}
