import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  template: `

    <div class="login-container">
      <form>
        <div class="login-inputs-container">
          <h1 class="logo">Enoca</h1>
          <h3 class="login-title">Login</h3>
          <p class="login-description">Login to access your Enoca account</p>
          <section class="input-container">
            <input type="email" placeholder="e-mail"/>
            <input type="password" placeholder="password"/>
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
            <div class="login-with-container">
              <label>Or Login with</label>
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
          </div>
        </div>
      </form>
      <div class="login-image">
      </div>
    </div>

  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
