import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { request } from "../../common/interfaces/request";
import { comment } from "../../common/interfaces/comment";
import { AuthService } from "../../store/services/auth.service";

@Injectable()

export class RequestService {

  BASE_URL: string = 'http://localhost:3000/api/requests';

  head = new HttpHeaders();

  HEADERS = {
    headers: this.head.set("content-type", "application/json").set("Authorization", `bearer ${this.authService.getUserToken()}`)
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getRequests(): Observable<request[]> {
    return this.http.get<request[]>(this.BASE_URL)
  };

  addRequest(request: request): Observable<request> {
    return this.http.post<request>(this.BASE_URL, JSON.stringify(request), this.HEADERS);
  };

  patchRequest(requestID: string, edits: request): Observable<request> {
    return this.http.patch<request>(`${this.BASE_URL}/${requestID}`, JSON.stringify(edits), this.HEADERS);
  };

  deleteRequest(requestID: string): Observable<request> {
    return this.http.delete<request>(`${this.BASE_URL}/${requestID}`, this.HEADERS);
  };

  postComment(requestID: string, comment: comment): Observable<request> {
    return this.http.post<request>(`${this.BASE_URL}/${requestID}/comment`, JSON.stringify({comment}), this.HEADERS);
  };
}