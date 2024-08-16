import { Component, Input, OnInit } from '@angular/core';
import { HotelDataModel } from '../../store/hotel.model';
import { Router, ActivatedRoute } from '@angular/router';
import slugify from 'slugify';

@Component({
  selector: 'app-filters-card',
  templateUrl: './filters-card.component.html',
  styleUrls: ['./filters-card.component.css'],
})
export class FiltersCardComponent implements OnInit {
  @Input() data: any;
  hotels: HotelDataModel[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.data.hotels$.subscribe((hotels: HotelDataModel[]) => {
      this.hotels = hotels;
    });

    // Subscribe to the queryParams observable from the route dependency
    this.route.queryParams.subscribe((params) => {
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
}
