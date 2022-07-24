import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = environment?.API_URL;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User []> | null {
    const usersApiUrl = `${this.apiUrl}/users`
    return this.http.get<User [] | null>(usersApiUrl);
  }
}
