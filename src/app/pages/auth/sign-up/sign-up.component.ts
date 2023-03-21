import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AuthActions from '../../../features/auth/store/auth.actions';
import * as AuthSelectors from '../../../features/auth/store/auth.selectors';
import { AppStateInterface } from '../../../core/models/app-state.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  template: `
    <div class="signup-container">
      <div class="signup-image"></div>
      <form
        class="form-container"
        [formGroup]="signUpForm"
        (ngSubmit)="onSubmit()"
      >
        <h1 class="logo">Enoca</h1>

        <h3 class="login-title">Sign up</h3>
        <p class="login-description">
          Let’s get you all st up so you can access your personal account.
        </p>

        <section class="input-container">
          <div class="form-row">
            <input
              type="text"
              placeholder="First Name"
              formControlName="firstName"
            />
            <input
              type="text"
              placeholder="Last Name"
              formControlName="lastName"
            />
          </div>
          <div class="form-row">
            <input type="email" placeholder="Email" formControlName="email" />
            <input
              type="number"
              placeholder="Phone Number"
              formControlName="phoneNumber"
            />
          </div>
          <div class="form-col">
            <input
              type="password"
              placeholder="Password"
              formControlName="password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              formControlName="confirmPassword"
            />
          </div>
        </section>

        <section class="terms">
          <input type="checkbox" />
          <label
            >I agree to all <span>Terms </span>and
            <span> Privacy Policies </span></label
          >
        </section>

        <section class="button-container">
          <button class="create-account-button">Create account</button>
          <app-social-buttons text="sign up"></app-social-buttons>
        </section>
      </form>
    </div>
  `,
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
    private router: Router
  ) {
    this.signUpForm = this.fb.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(10),
            Validators.pattern('^[a-zA-Z]*$'),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(10),
            Validators.pattern('^[a-zA-Z]*$'),
          ],
        ],
        phoneNumber: [
          '',
          [
            Validators.required,
            Validators.pattern('^[0-9]*$'),
            Validators.minLength(11),
            Validators.maxLength(11),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  ngOnInit() {
    this.store
      .select(AuthSelectors.signUpUserSelector)
      .subscribe((signUpUser) => {
        if (signUpUser) {
          console.log('Sign up successful');
          this.router.navigate(['/login']);
        }
      });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatchedPasswords: true };
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }
    const firstName = this.signUpForm.get('firstName')?.value;
    const lastName = this.signUpForm.get('lastName')?.value;
    const phoneNumber = this.signUpForm.get('phoneNumber')?.value;
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;

    this.store.dispatch(
      AuthActions.signUp({ firstName, lastName, email, phoneNumber, password })
    );
  }
}
