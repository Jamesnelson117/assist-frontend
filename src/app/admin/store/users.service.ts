import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { user } from "../../common/interfaces/user";
import { AuthService } from "../../store/services/auth.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UsersService {
  BASE_URL = 'http://localhost:3000/api/users';

  head = new HttpHeaders();

  HEADERS = {
    headers: this.head
      .set("content-type", "application/json")
      .set("Authorization", `bearer ${this.authService.getUserToken()}`)
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getUsers(): Observable<user[]> {
    return this.http.get<user[]>(this.BASE_URL, this.HEADERS);
  };

  addUser(newUser: user): Observable<user> {
    console.log(newUser);
    return this.http.post<user>(this.BASE_URL, JSON.stringify(newUser), this.HEADERS)
  };
};
