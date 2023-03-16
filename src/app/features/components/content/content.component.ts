import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HotelDataModel} from "../../store/hotel.model";
import {select, Store} from "@ngrx/store";
import {AppStateInterface} from "../../../core/models/app-state.model";
import {errorSelector, hotelsSelector, isLoadingSelector} from "../../store/hotels.selectors";
import * as HotelsActions from "../../store/hotels.actions";

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
      <div class="content-card-container">
        <ng-container *ngIf="(hotels$ |async) as hotels">
          <ng-container *ngFor="let hotel of hotels | slice: 0:4">

            <app-card [hotel]="hotel"></app-card>
          </ng-container>
        </ng-container>
      </div>
    </div>
    <!-- Template End -->
  `,
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
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
}
