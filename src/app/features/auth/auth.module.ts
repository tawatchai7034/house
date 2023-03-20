import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SocialButtonsComponent} from "./components/social-buttons/social-buttons.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./store/auth.effects";
import {StoreModule} from "@ngrx/store";
import {AuthReducer} from "./store/auth.reducers";


@NgModule({
  declarations: [SocialButtonsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature("auth", AuthReducer)
  ],
  exports: [
    SocialButtonsComponent
  ]
})
export class AuthModule {
}
