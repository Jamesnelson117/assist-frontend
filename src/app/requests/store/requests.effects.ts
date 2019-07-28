import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap } from "rxjs/operators";
import * as fromActions from './requests.actions';
import { RequestService } from "./requests.service";
import { request } from "../../common/interfaces/request";
import { CustomAction } from "../../common/interfaces/store/action";

@Injectable()

export class RequestEffects {
  constructor(
    private actions$: Actions,
    private requestService: RequestService
  ) {}

  @Effect()
  getRequests$ = this.actions$
  .pipe(
    ofType(fromActions.requestActionTypes.getRequests),
    mergeMap(() => this.requestService.getRequests()
    .pipe(
      map((requests: request[]) => new fromActions.getRequestsSuccess(requests))
    ))
  );

  @Effect()
  addRequest$ = this.actions$
  .pipe(
    ofType(fromActions.requestActionTypes.addRequest),
    mergeMap((action: CustomAction) => {
      return this.requestService.addRequest(action.payload)
      .pipe(
        map((addedRequest: request) => new fromActions.addRequestSuccess(addedRequest))
      )
    })
  );

  @Effect()
  patchRequest$ = this.actions$
  .pipe(
    ofType(fromActions.requestActionTypes.patchRequest),
    mergeMap((action: CustomAction) => {
      return this.requestService.patchRequest(action.payload.requestID, action.payload.edits)
      .pipe(
        map((editedRequest: request) => new fromActions.patchRequestSuccess(editedRequest))
      )
    })
  );

  @Effect()
  addComment$ = this.actions$
  .pipe(
    ofType(fromActions.requestActionTypes.addComment),
    mergeMap((action: CustomAction) => {
      return this.requestService.postComment(action.payload.requestID, action.payload.comment)
      .pipe(
        map((updatedRequest: request) => new fromActions.addCommentSuccess(updatedRequest))
      )
    })
  )

  @Effect()
  addCommentSuccess = this.actions$.pipe(
    ofType(fromActions.requestActionTypes.addCommentSuccess),
    map(() => new fromActions.getRequests())
  )

  @Effect()
  deleteRequest$ = this.actions$
  .pipe(
    ofType(fromActions.requestActionTypes.deleteRequest),
    mergeMap((action: CustomAction) => {
      return this.requestService.deleteRequest(action.payload)
      .pipe(
        map((deletedRequest: request) => new fromActions.deleteRequestSuccess(deletedRequest))
      )
    })
  );
};
