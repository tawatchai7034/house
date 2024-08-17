import { Component, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { filter, map, Observable, Subject, takeUntil } from 'rxjs';
import { AppStateInterface } from 'src/app/core/models/app-state.model';
import { HotelDataModel } from '../../store/hotel.model';
import { hotelsSelector } from '../../store/hotels.selectors';
import { Router } from '@angular/router';
import slugify from 'slugify';
import { updateSearchBar } from '../../store/search/search.action';

interface GuestsData {
  [key: string]: number;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  // Define a property 'today' as the current date in ISO format
  today = new Date().toISOString().split('T')[0];
  form: FormGroup;
  hotels$: Observable<HotelDataModel[]>;
  hotelCountry: string[] = [];
  destinationInputFocused = false;
  filteredHotels: HotelDataModel[] = [];
  formSubmitted = false;

  unsubscribe$ = new Subject<void>();

  guestsData: GuestsData = {
    rooms: 1,
    adults: 1,
    children: 0,
  };

  constructor(private readonly fb: FormBuilder, private readonly modalService: NgbModal, private readonly store: Store<AppStateInterface>, private readonly router: Router) {
    // Initialize the form property using the FormBuilder dependency
    this.form = this.fb.group({
      destination: '',
      checkIn: ['', Validators.required],
      checkOut: ['', [Validators.required]],
      roomsGuests: [
        '',
        [Validators.required, this.roomsGuestsValidator.bind(this)],
      ],
    });
    // Get the checkOut control from the form
    const checkOutControl = this.form.get('checkOut');
    if (checkOutControl) {
      // Set the validator for the checkOut control using the checkOutValidator method
      checkOutControl.setValidators(this.checkOutValidator.bind(this));
    }
    this.hotels$ = this.store.pipe(select(hotelsSelector));
    this.hotels$.pipe(filter((hotels) => !!hotels)).subscribe((hotels) => {
      this.hotelCountry = hotels.map((hotel) => hotel.address.country);
      this.filteredHotels = hotels;
    });
  }

  get checkOutControl() {
    return this.form.get('checkOut');
  }

  // Define a method 'openModal' that takes content as an argument
  openModal(content: NgbModalRef | TemplateRef<any>) {
    this.modalService.open(content);
  }

  roomsGuestsValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value) {
      const [rooms, adults, children] = value
        .split(',')
        .map((val: any) => parseInt(val));
      if (rooms > 0 && adults > 0 && children >= 0) {
        return null;
      }
    }
    return { invalidRoomsGuests: true };
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
    if (this.form.valid) {
      const { destination, checkIn, checkOut, roomsGuests } = this.form.value;
      const country = destination;
      const countrySlug = slugify(country, { lower: true });
      this.store.dispatch(
        updateSearchBar({
          searchResult: [
            {
              destination,
              checkIn,
              checkOut,
              roomsGuests,
            },
          ],
        })
      );
      this.router.navigate(['/hotel-listing'], {
        queryParams: { country: countrySlug },
      });
    } else {
      console.error('Error: All form fields are required.');
    }
  }

  selectDestination(country: string) {
    this.form.patchValue({ destination: country });
    this.destinationInputFocused = false;
  }

  searchHotels(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.hotels$.pipe(takeUntil(this.unsubscribe$), map((hotels) => hotels.filter((hotel) =>
      hotel.address.country.toLowerCase().includes(value.toLowerCase())
    ))).subscribe((filteredHotels) => (this.filteredHotels = filteredHotels));
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

