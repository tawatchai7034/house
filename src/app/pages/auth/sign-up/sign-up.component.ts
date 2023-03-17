import {Component} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  template: `

    <div class="signup-container">
      <div class="signup-image"></div>
      <form class="form-container">
        <h1 class="logo">Enoca</h1>

        <h3 class="login-title">Sign up</h3>
        <p class="login-description">Let’s get you all st up so you can access your personal account.</p>

        <section class="input-container">
          <div class="form-row">
            <input placeholder="First Name"/>
            <input placeholder="Last Name"/>
          </div>
          <div class="form-row">
            <input placeholder="Email"/>
            <input placeholder="Phone Number"/>
          </div>
          <div class="form-col">
            <input placeholder="Password"/>
            <input placeholder="Confirm Password"/>
          </div>
        </section>

        <section class="terms">
          <input type="checkbox"/>
          <label>I agree to all <span>Terms </span>and <span> Privacy Policies </span></label>
        </section>

        <section class="button-container">
          <button class="create-account-button">Create account</button>
          <div class="signup-with-container">
            <label>Or Sign up with</label>
          </div>
          <div class="social-login-buttons">
            <button>
              <img src="assets/icons/facebook.svg" alt="facebook_icon"/>
            </button>
            <button>
              <img src="assets/icons/google.svg" alt=""/>
            </button>
            <button>
              <img src="assets/icons/apple.svg" alt=""/>
            </button>
          </div>
        </section>
      </form>
    </div>
  `,
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

}
