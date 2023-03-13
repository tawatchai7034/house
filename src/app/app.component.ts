import { Component, OnInit } from '@angular/core';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    //take data from dataService
    this.dataService.getHotels().subscribe((data) => {
      console.log(data);
    });
  }
}
