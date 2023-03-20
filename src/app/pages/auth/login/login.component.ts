import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import * as AuthActions from "../../../features/auth/store/auth.actions";
import * as AuthSelectors from "../../../features/auth/store/auth.selectors";
import {AppStateInterface} from "../../../core/models/app-state.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <div class="login-inputs-container">
          <h1 class="logo">Enoca</h1>
          <h3 class="login-title">Login</h3>
          <p class="login-description">Login to access your Enoca account</p>
          <section class="input-container">
            <input type="email" placeholder="e-mail" formControlName="email"/>
            <input type="password" placeholder="password" formControlName="password"/>
          </section>
          <section class="password-section">
            <label>
              <input type="checkbox"/>
              Remember me
            </label>
            <button class="forgot-password-button">Forgot Password</button>
          </section>
          <div class="button-container">
            <button class="login-button">Login</button>
            <p>Don't have an account? <a href="" routerLink="/sign-up" class="login-to-signup">Sign up</a></p>
            <app-social-buttons text="login"></app-social-buttons>
          </div>
        </div>
      </form>
      <div class="login-image">
      </div>
    </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // isEmailInvalid = false;
  // isPasswordInvalid = false;

  constructor(private fb: FormBuilder, private store: Store<AppStateInterface>, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ""
    })
  }

  ngOnInit() {
    this.store.select(AuthSelectors.loggedInUserSelector).subscribe(loggedInUser => {
      if (loggedInUser) {
        console.log('Login successful');
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.store.dispatch((AuthActions.login({email, password})))

  }
}
