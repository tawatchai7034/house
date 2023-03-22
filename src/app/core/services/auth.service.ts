import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import {
  AuthLoginModel,
  AuthSignupModel,
} from '../../features/auth/store/auth.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthLoginModel> {
    return this.http
      .post<AuthLoginModel>('http://localhost:8000/user/login', {
        email,
        password,
      })
      .pipe(
        map((response: any) => {
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          localStorage.setItem('token', response.token);
          return response.user;
        })
      );
  }

  signUp(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    password: string
  ): Observable<AuthSignupModel> {
    const url = 'http://localhost:8000/user/signup';
    return this.http.post<AuthSignupModel>(url, {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    });
  }
}
