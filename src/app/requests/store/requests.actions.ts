import { Action } from "@ngrx/store";

export enum requestActionTypes {
  getRequests = '[Requests] Get Requests',
  getRequestsSuccess = '[Requests] Get Requests Success',
  getRequestsFail = '[Requests] Get Requests Fail',
  addRequest = '[Requests] Add Request',
  addRequestSuccess = '[Requests] Add Request Success',
  addRequestFail = '[Requests] Add Request Fail',
  patchRequest = '[Requests] Patch Request',
  patchRequestSuccess = '[Requests] Patch Request Success',
  patchRequestFail = '[Requests] Patch Request Fail',
  addComment = '[Requests] Add Comment',
  addCommentSuccess = '[Requests] Add Comment Success',
  addCommentFail = '[Requests] Add Comment Fail',
  deleteRequest = '[Requests] Delete Request',
  deleteRequestSuccess = '[Requests] Add Delete Success',
  deleteRequestFail = '[Requests] Add Delete Fail',
};

export class getRequests implements Action {
  readonly type: string = requestActionTypes.getRequests;
};

export class getRequestsSuccess implements Action {
  readonly type: string = requestActionTypes.getRequestsSuccess;
  constructor(public payload: any) {}
};

export class addRequest implements Action {
  readonly type: string = requestActionTypes.addRequest;
  constructor(public payload: any) {}
};

export class addRequestSuccess implements Action {
  readonly type: string = requestActionTypes.addRequestSuccess;
  constructor(public payload: any) {}
};

export class patchRequest implements Action {
  readonly type: string = requestActionTypes.patchRequest;
  constructor(public payload: any) {}
};

export class patchRequestSuccess implements Action {
  readonly type: string = requestActionTypes.patchRequestSuccess;
  constructor(public payload: any) {}
};

export class addComment implements Action {
  readonly type: string = requestActionTypes.addComment;
  constructor(public payload: any) {}
};

export class addCommentSuccess implements Action {
  readonly type: string = requestActionTypes.addCommentSuccess;
  constructor(public payload: any) {}
};

export class deleteRequest implements Action {
  readonly type: string = requestActionTypes.deleteRequest;
  constructor(public payload: any) {}
};

export class deleteRequestSuccess implements Action {
  readonly type: string = requestActionTypes.deleteRequestSuccess;
  constructor(public payload: any) {}
};

export type RequestActions = getRequests
  | getRequestsSuccess
  | addRequest
  | addRequestSuccess
  | patchRequest
  | patchRequestSuccess
  | deleteRequest
  | deleteRequestSuccess
  | addComment
  | addCommentSuccess;
