import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/core/models/app-state.model';
import { HotelDataModel } from '../../store/hotel.model';
import { hotelsSelector } from '../../store/hotels.selectors';

@Component({
  selector: 'app-search-bar',
  template: `
    <!-- Template Start -->
    <div class="search-bar-container">
      <div class="section-content">
        <section class="section-title">
          <p>Where are you flying?</p>
        </section>
        <form [formGroup]="form" (ngSubmit)="submit()">
          <section class="inputs-container">
            <input
              type="text"
              placeholder="Enter Destination"
              formControlName="destination"
              (keyup)="searchHotels($event)"
              (focus)="destinationInputFocused = true"
              (blur)="destinationInputFocused = false"
            />
            <ul
              class="search-results"
              *ngIf="destinationInputFocused && hotelNames.length > 0"
            >
              <li
                class="search-result-item"
                *ngFor="let hotel of hotels$ | async"
              >
                {{ hotel.name }}
              </li>
            </ul>

            <input
              type="date"
              placeholder="Check In"
              formControlName="checkIn"
              [min]="today"
            />
            <input
              type="date"
              placeholder="Check Out"
              formControlName="checkOut"
              [min]="today"
              [ngClass]="{ error: checkOutControl?.invalid }"
            />
            <input
              type="text"
              id="rooms-guests-input"
              placeholder="Rooms & Guests"
              formControlName="roomsGuests"
              (click)="openModal(content)"
            />
            <ng-template #content let-modal>
              <div class="modal-header">
                <h4 class="modal-title">Select Rooms and Guests</h4>
                <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  (click)="modal.dismiss('Cross click')"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div *ngFor="let item of ['rooms', 'adults', 'children']">
                  <p>{{ item }}</p>
                  <section>
                    <button (click)="updateGuestsData(item, -1)">
                      <img src="assets/icons/minus.svg" alt="minus_icon" />
                    </button>
                    <label>{{ guestsData[item] }}</label>
                    <button (click)="updateGuestsData(item, +1)">
                      <img src="assets/icons/plus.svg" alt="plus_icon" />
                    </button>
                  </section>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  (click)="modal.close('Close click')"
                >
                  Done
                </button>
              </div>
            </ng-template>
          </section>
          <section class="buttons-container">
            <button type="button" class="button-promo">+ Add Promo Code</button>
            <button type="submit" class="button-show-place">Show Places</button>
          </section>
        </form>
      </div>
    </div>

    <!-- Template End -->
  `,
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  today = new Date().toISOString().split('T')[0];
  form: FormGroup;
  hotels$: Observable<HotelDataModel[]>;
  hotelNames: string[] = [];
  destinationInputFocused = false;

  guestsData: GuestsData = {
    rooms: 1,
    adults: 1,
    children: 0,
  };

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private store: Store<AppStateInterface>
  ) {
    this.form = this.fb.group({
      destination: '',
      checkIn: ['', Validators.required],
      checkOut: ['', [Validators.required]],
      roomsGuests: '',
    });
    const checkOutControl = this.form.get('checkOut');
    if (checkOutControl) {
      checkOutControl.setValidators(this.checkOutValidator.bind(this));
    }
    this.hotels$ = this.store.pipe(select(hotelsSelector));
    this.hotels$.pipe(filter((hotels) => !!hotels)).subscribe((hotels) => {
      this.hotelNames = hotels.map((hotel) => hotel.name);
    });
  }
  searchHotels(event: any) {
    const value = event.target.value;
    const results = this.hotelNames.filter((name) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    console.log(results);
  }

  get checkOutControl() {
    return this.form.get('checkOut');
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  checkOutValidator(control: AbstractControl): ValidationErrors | null {
    const checkInControl = this.form.get('checkIn');
    if (checkInControl) {
      const checkInDate = new Date(checkInControl.value);
      const checkOutDate = new Date(control.value);
      if (checkOutDate <= checkInDate) {
        console.log('Invalid check-out date');
        return { invalidCheckOutDate: true };
      }
    }
    return null;
  }

  updateGuestsData(key: string, value: number) {
    if (key === 'rooms' || key === 'adults') {
      if (this.guestsData[key] + value >= 1) {
        this.guestsData[key] += value;
      }
    } else if (key === 'children') {
      if (this.guestsData[key] + value >= 0) {
        this.guestsData[key] += value;
      }
    }
    this.updateRoomsGuests();
  }

  updateRoomsGuests() {
    this.form.patchValue({
      roomsGuests: `${this.guestsData['rooms']} Rooms, ${this.guestsData['adults']} Adults, ${this.guestsData['children']} Children`,
    });
  }

  submit() {
    console.log(this.form.value);
  }
}

interface GuestsData {
  [key: string]: number;
}
