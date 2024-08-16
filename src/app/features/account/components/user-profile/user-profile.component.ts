import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AppStateInterface } from 'src/app/core/models/app-state.model';
import { loggedInUserSelector } from 'src/app/features/auth/store/auth.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  loggedInUser$ = this.store.select(loggedInUserSelector);
  activeTab = 'account';
  firstName = '';
  lastName = '';
  userEmail = '';

  unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppStateInterface>, private router: Router) {}

  ngOnInit(): void {
    this.loggedInUser$.pipe(takeUntil(this.unsubscribe$)).subscribe((loggedInUser) => {
      if (loggedInUser) {
        this.firstName = loggedInUser[0].user.firstName;
        this.lastName = loggedInUser[0].user.lastName;
        this.userEmail = loggedInUser[0].user.email;
      } else {
        console.error(Error);
      }
    });
  }
  logout(): void {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/']).then(() => {
      location.reload();
    });
  }
}
