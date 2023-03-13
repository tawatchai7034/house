import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <!-- Template Start -->
    <footer>
      <div class="footer-section company-info">
        <h2>Enoca</h2>
        <div class="logo-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png"
            alt="Facebook_logo"
          />
          <img
            src="https://e7.pngegg.com/pngimages/208/269/png-clipart-youtube-play-button-computer-icons-youtube-youtube-logo-angle-rectangle-thumbnail.png"
            alt="Youtube_logo"
          />
          <img
            src="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg"
            alt="Twitter_logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/600px-Instagram_logo_2022.svg.png"
            alt="Instagram_logo"
          />
        </div>
      </div>
      <div class="footer-section destinations">
        <h2>Our Destinations</h2>
        <ul>
          <li>Canada</li>
          <li>Alaska</li>
          <li>Turkey</li>
          <li>Iceland</li>
        </ul>
      </div>
      <div class="footer-section activities">
        <h2>Our Activities</h2>
        <ul>
          <li>Nothern Lights</li>
          <li>Whale Watching</li>
          <li>Ice Climbing</li>
          <li>Hot Air Ballooning</li>
        </ul>
      </div>
      <div class="footer-section travel-blogs">
        <h2>Travel Blogs</h2>
        <ul>
          <li>Bali Travel Guide</li>
          <li>How to Travel Alone</li>
          <li>How to Travel on a Budget</li>
          <li>How to Travel with Kids</li>
        </ul>
      </div>
      <div class="footer-section about-us">
        <h2>About Us</h2>
        <ul>
          <li>Our Story</li>
          <li>Work with us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </footer>

    <!-- Template End -->
  `,
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}
