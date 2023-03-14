import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {HotelListingComponent} from "./pages/hotel-listing/hotel-listing.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: "hotel-listing", component: HotelListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
