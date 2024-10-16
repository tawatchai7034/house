import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-test',
  templateUrl: './demoTest.component.html',
  styleUrls: ['./demoTest.component.css'],
})
export class DemoTestComponent {
  public dataList: any[] = [
    {
      id: 'A',
      detail: [
        { code: 1, isBlack: false, isHouse: false},
        { code: 2, isBlack: true, isHouse: true },
        { code: 3, isBlack: false, isHouse: false },
        { code: 4, isBlack: true, isHouse: false },
        { code: 5, isBlack: false, isHouse: false },
        { code: 6, isBlack: true, isHouse: false },
        { code: 7, isBlack: false, isHouse: false },
        { code: 8, isBlack: true, isHouse: true },
      ],
    },
    {
      id: 'B',
      detail: [
        { code: 1, isBlack: true, isHouse: true},
        { code: 2, isBlack: false, isHouse: false },
        { code: 3, isBlack: true, isHouse: false },
        { code: 4, isBlack: false, isHouse: false },
        { code: 5, isBlack: true, isHouse: false },
        { code: 6, isBlack: false, isHouse: false },
        { code: 7, isBlack: true, isHouse: true },
        { code: 8, isBlack: false, isHouse: false },
      ],
    },
    {
      id: 'C',
      detail: [
        { code: 1, isBlack: false, isHouse: false },
        { code: 2, isBlack: true, isHouse: true },
        { code: 3, isBlack: false, isHouse: false },
        { code: 4, isBlack: true, isHouse: false },
        { code: 5, isBlack: false, isHouse: false },
        { code: 6, isBlack: true, isHouse: false },
        { code: 7, isBlack: false, isHouse: false },
        { code: 8, isBlack: true, isHouse: true },
      ],
    },
    {
      id: 'D',
      detail: [
        { code: 1, isBlack: true, isHouse: true },
        { code: 2, isBlack: false, isHouse: false },
        { code: 3, isBlack: true, isHouse: false },
        { code: 4, isBlack: false, isHouse: false },
        { code: 5, isBlack: true, isHouse: false },
        { code: 6, isBlack: false, isHouse: false },
        { code: 7, isBlack: true, isHouse: true },
        { code: 8, isBlack: false, isHouse: false },
      ],
    },
    {
      id: 'E',
      detail: [
        { code: 1, isBlack: false, isHouse: false },
        { code: 2, isBlack: true, isHouse: true },
        { code: 3, isBlack: false, isHouse: false },
        { code: 4, isBlack: true, isHouse: false },
        { code: 5, isBlack: false, isHouse: false },
        { code: 6, isBlack: true, isHouse: false },
        { code: 7, isBlack: false, isHouse: false },
        { code: 8, isBlack: true, isHouse: true },
      ],
    },
    {
      id: 'F',
      detail: [
        { code: 1, isBlack: true, isHouse: true },
        { code: 2, isBlack: false, isHouse: false },
        { code: 3, isBlack: true, isHouse: false },
        { code: 4, isBlack: false, isHouse: false },
        { code: 5, isBlack: true, isHouse: false },
        { code: 6, isBlack: false, isHouse: false },
        { code: 7, isBlack: true, isHouse: true },
        { code: 8, isBlack: false, isHouse: false },
      ],
    },
    {
      id: 'G',
      detail: [
        { code: 1, isBlack: false, isHouse: false },
        { code: 2, isBlack: true, isHouse: true },
        { code: 3, isBlack: false, isHouse: false },
        { code: 4, isBlack: true, isHouse: false },
        { code: 5, isBlack: false, isHouse: false },
        { code: 6, isBlack: true, isHouse: false },
        { code: 7, isBlack: false, isHouse: false },
        { code: 8, isBlack: true, isHouse: true },
      ],
    },
    {
      id: 'H',
      detail: [
        { code: 1, isBlack: true, isHouse: true },
        { code: 2, isBlack: false, isHouse: false },
        { code: 3, isBlack: true, isHouse: false },
        { code: 4, isBlack: false, isHouse: false },
        { code: 5, isBlack: true, isHouse: false },
        { code: 6, isBlack: false, isHouse: false },
        { code: 7, isBlack: true, isHouse: true },
        { code: 8, isBlack: false, isHouse: false },
      ],
    },
  ];
}
