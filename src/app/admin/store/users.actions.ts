import { Action } from "@ngrx/store";

export enum UserStoreActionTypes {
  getUsers = '[Users] Get Users',
  getUsersSuccess = '[Users] Get Users Success',
  getUsersFail = '[Users] Get Users Fail',
  addNewUser = '[Users] Add New User',
  addNewUserSuccess = '[Users] Add New User Success',
  addNewUserFail = '[Users] Add New User Failures',
};

export class getUsers implements Action {
  readonly type: string = UserStoreActionTypes.getUsers;
};

export class getUsersSuccess implements Action {
  readonly type: string = UserStoreActionTypes.getUsersSuccess;
  constructor(public payload: any) {}
};

export class getUsersFail implements Action {
  readonly type: string = UserStoreActionTypes.getUsersFail;
  constructor(public payload: any) {}
};

export class addNewUser implements Action {
  readonly type: string = UserStoreActionTypes.addNewUser;
  constructor(public payload: any) {}
};

export class addNewUserSuccess implements Action {
  readonly type: string = UserStoreActionTypes.addNewUserSuccess;
  constructor(public payload: any) {}
};

export class addNewUserFail implements Action {
  readonly type: string = UserStoreActionTypes.addNewUserFail;
  constructor(public payload: any) {}
};
