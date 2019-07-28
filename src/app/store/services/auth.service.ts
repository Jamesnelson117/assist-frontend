import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { authToken } from "../../common/interfaces/authToken";
import { Store } from "@ngrx/store";
import { RootReducer } from "../../common/interfaces/store/rootReducer";
import { isAdmin } from "../selectors/auth.selector";
import { user } from "../../common/interfaces/user";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class AuthService {
  BASE_URL = 'http://localhost:3000/api/';
  AUTH_URL = `${this.BASE_URL}auth/login`;
  USER_URL = `${this.BASE_URL}users`;
  
  HEADERS = {
    headers: new HttpHeaders().set("content-type", "application/json")
  }
  
  constructor(
    private http: HttpClient,
    private store: Store<RootReducer>,
  ) {}

  signInUser(user: any): Observable<string> {
    return this.http.post<string>(`${this.AUTH_URL}`, JSON.stringify(user), this.HEADERS)
  };

  getUser(userID: string): Observable<user>{
    return this.http.get<user>(`${this.USER_URL}/${userID}`);
  }

  setUserToken(token: string): void {
    return localStorage.setItem('Authorization', token);
  };

  getUserToken(): string {
    return localStorage.getItem('Authorization');
  };

  getUserId(): string {
    return this.getDecodedAuthToken().id;
  };

  deleteAuthToken(): void {
    return localStorage.removeItem('Authorization');
  };

  isAdmin(): Observable<boolean> {
    return this.store.select(isAdmin);
  };

  getDecodedAuthToken(): authToken {
    const helper = new JwtHelperService()
    return helper.decodeToken(this.getUserToken());
  };
};
