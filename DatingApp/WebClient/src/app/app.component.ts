import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from './api/users.service';
import { User } from './shared/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'The Dating App';
  users: User[] = [];
  getUserSubscription: Subscription;

  constructor(private usersService: UsersService) {}

  ngOnDestroy(): void {
    this.getUserSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.getUserSubscription =
      this.usersService.getUsers().subscribe({ next: (users: User[]) => {
        this.users = users;
      }, error: error => {
        // TODO: Present the error nicely
        console.log(error);
      }});
  }
}
