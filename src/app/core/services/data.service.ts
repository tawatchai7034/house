import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HotelDataModel} from '../../features/hotel/store/hotel.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private hotelsURL = 'assets/data.json';

  constructor(private http: HttpClient) {

  }

  getHotels(): Observable<HotelDataModel[]> {
    console.log('Fetching hotels from API...');
    return this.http.get<HotelDataModel[]>(this.hotelsURL);
  }

}

