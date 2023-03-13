import { Component, OnInit } from '@angular/core';
import {HotelDataModel} from "../../store/hotel.model";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppStateInterface} from "../../../core/models/app-state.model";
import {errorSelector, hotelsSelector, isLoadingSelector} from "../../store/hotels.selectors";
import * as HotelsActions from "../../store/hotels.actions";
@Component({
  selector: 'app-card',
  template: `
    <div class="card-container">
      <div class="card-content-container" *ngFor="let hotel of hotels$ | async">
        <section class="card-content">
          <h6>{{hotel.name}}</h6>
          <p>An amazing journey</p>
        </section>
        <section class="card-price">{{hotel.nightlyPrice}}</section>
      </div>
      <button>Book a Hotel</button>
    </div>
  `,
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  hotels$: Observable<HotelDataModel[]>;

  constructor(
    private store: Store<AppStateInterface>
  ) {
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.hotels$ = this.store.pipe(select(hotelsSelector));
    //
    this.hotels$.subscribe((data) => console.log(data))
  }

  ngOnInit(): void {
    this.store.dispatch(HotelsActions.loadHotels())
  }

}
