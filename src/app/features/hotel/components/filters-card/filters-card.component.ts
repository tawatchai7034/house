import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HotelDataModel } from '../../store/hotel.model';
import { Router, ActivatedRoute } from '@angular/router';
import slugify from 'slugify';
import { Observable, Subject, takeUntil } from 'rxjs';

interface FiltersCardData {
  hotels$: Observable<HotelDataModel[]>;
  isLoading$: Observable<boolean>;
  hotelCount: number;
  motelCount: number;
  resortCount: number;
  totalCount: number;
}


@Component({
  selector: 'app-filters-card',
  templateUrl: './filters-card.component.html',
  styleUrls: ['./filters-card.component.css'],
})
export class FiltersCardComponent implements OnInit, OnDestroy {
  @Input() data!: FiltersCardData;
  hotels: HotelDataModel[] = [];

  unsubscribe$ = new Subject<void>();

  constructor(private readonly router: Router, private readonly route: ActivatedRoute) {}
  
  ngOnInit() {
    this.data.hotels$.pipe(takeUntil(this.unsubscribe$)).subscribe((hotels: HotelDataModel[]) => {
      this.hotels = hotels;
    });

    // Subscribe to the queryParams observable from the route dependency
    this.route.queryParams.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
      // Get the 'country' query parameter
      const country = params['country'];
      // If the 'country' query parameter exists
      if (country) {
        // Filter the hotels property to only include hotels from the specified country
        this.hotels = this.hotels.filter(
          (hotel) => slugify(hotel.address.country, { lower: true }) === country
        );
      }
    });
  }
  // Define a method 'viewPlace' that takes a hotel name as an argument
  viewPlace(hotelName: string) {
    // Generate a slug from the hotel name
    const slug = slugify(hotelName);
    // Navigate to the 'hotel-listing' route with the generated slug as a parameter
    this.router.navigate(['hotel-listing', slug]);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
