import { Component, OnInit } from "@angular/core";
import { request } from "../../common/interfaces/request";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getSelectedRequest } from "../store/requests.selectors";
import { getRequests } from "../store/requests.actions";
import * as requestActions from "../store/requests.actions";

import { Router } from "@angular/router";
import { RequestStore } from "../store/requests.reducer";
import { comment } from "../../common/interfaces/comment";
import { AuthService } from "../../store/services/auth.service";

@Component({
  'selector': 'assist-request',
  templateUrl: './request.component.html'
})
export class RequestComponent implements OnInit {
  request$?: Observable<request>

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<RequestStore>
  ) {}

  ngOnInit() {
    this.request$ = this.store.select(getSelectedRequest);
    this.store.dispatch(new getRequests());
  };

  deleteRequest(requestID: string) {
    this.store.dispatch(new requestActions.deleteRequest(requestID));
    this.router.navigate(['/']);
  };

  addComment($event: comment) {
    this.store.dispatch(new requestActions.addComment($event));
  };

  updateRequest($event: {requestID: String, edits: any}) {
    this.store.dispatch(new requestActions.patchRequest($event))
  };

  hasUserUpdateRights(userId: string) {
    return (this.authService.isAdmin() || userId === this.authService.getUserId())
  };

  markAsComplete($event: request) {
    this.updateRequest({
      requestID: $event._id,
      edits: { isCompleted: true }
    });
  };
}