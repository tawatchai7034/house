import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- Template Start -->
    <div class="header-container">
      <app-navbar></app-navbar>
      <div class="header-content-container">
        <p>{{ HeaderTitle }}</p>
        <p>{{ HeaderSubTitle }}</p>
        <p>{{ HeaderDescription }}</p>
      </div>
    </div>
    <!-- Template End -->
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  HeaderTitle: string = 'Explore, Dream, Discover';
  HeaderSubTitle: string = 'LIVE & TRAVEL';
  HeaderDescription: string = 'Special offers to suit your plan';

  ngAfterViewInit() {
    const headerContainer = document.querySelector(
      '.header-container'
    ) as HTMLElement;

    headerContainer.addEventListener('mousemove', (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      headerContainer.style.backgroundPositionX = x * 50 - 115 + 'px';
      headerContainer.style.backgroundPositionY = y * 50 - 115 + 'px';
    });
  }
}
