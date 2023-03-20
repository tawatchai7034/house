import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms"

@Component({
  selector: 'app-hotels-filters',
  template: `
    <div class="hotels-filter-container">
      <form>
        <h3>Filters</h3>
        <div>
          <h5>Price</h5>
          <input type="range" min="0" max="100" step="1"/>
        </div>

      </form>

    </div>`,
  styleUrls: ['./hotels-filters.component.css']
})
export class HotelsFiltersComponent {

}
