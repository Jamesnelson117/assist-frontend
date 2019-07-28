import { CustomAction } from "../../common/interfaces/store/action";

export enum AuthActionTypes {
  login = '[Auth] Login',
  loginSuccess = '[Auth] Login Success',
  loginFail = '[Auth] Login Fail',
  setUser = '[Auth] Set User'
};

export class loginAttempt implements CustomAction {
  readonly type: string = AuthActionTypes.login;
  constructor(public payload: any) {}
};

export class loginSuccess implements CustomAction {
  readonly type: string = AuthActionTypes.loginSuccess;
  constructor(public payload: any) {}
};

export class loginFail implements CustomAction {
  readonly type: string = AuthActionTypes.loginFail;
  constructor(public payload: any) {}
};

export class setUser implements CustomAction {
  readonly type: string = AuthActionTypes.setUser;
  constructor(public payload: any) {}
};
