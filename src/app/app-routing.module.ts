import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HotelListingComponent } from './pages/hotel-listing/hotel-listing.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { AccountComponent } from './pages/account/account.component';
import { HotelDetailsComponent } from './pages/hotel-details/hotel-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'hotel-listing',
    component: HotelListingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },

  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'hotel-listing/:name',
    component: HotelDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
