import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: `
    <!-- Template Start -->
    <div class="search-bar-container">
      <div class="section-content">
        <section class="section-title">
          <p>Where are you flying?</p>
        </section>
        <section class="inputs-container">
          <input type="text" placeholder="Enter Destination" />
          <input type="text" placeholder="Check In" />
          <input type="text" placeholder="Check Out" />
          <input type="text" placeholder="Rooms & Guests" />
        </section>
        <section class="buttons-container">
          <button class="button-promo">+ Add Promo Code</button>
          <button class="button-show-place">Show Places</button>
        </section>
      </div>
    </div>

    <!-- Template End -->
  `,
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {}
