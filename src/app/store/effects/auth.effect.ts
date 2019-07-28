import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { AuthActionTypes, loginSuccess, loginFail } from "../actions/auth.actions";
import { mergeMap, map, catchError, concatMap } from "rxjs/operators";
import { CustomAction } from "../../common/interfaces/store/action";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  loginAttempt$ = this.action$.pipe(
    ofType(AuthActionTypes.login),
    mergeMap((action: CustomAction) => this.authService.signInUser(action.payload)
    .pipe(
      map((response: any) => {
        return new loginSuccess(response);
      }),
      catchError((errorResponse: HttpErrorResponse) => of(new loginFail(errorResponse.error)))
    ))
  );

  @Effect({dispatch: false})
  loginSuccess$ = this.action$.pipe(
    ofType(AuthActionTypes.loginSuccess),
    concatMap((action: CustomAction) => of(action.payload)
    .pipe(
      map((response: any) => {
        this.authService.setUserToken(response.token);
        this.router.navigate(['/requests']);
      }),
    ))
  );

  @Effect()
  setUser$ = this.action$.pipe(
    ofType(AuthActionTypes.setUser),
    mergeMap((action: CustomAction) => this.authService.getUser(action.payload)
    .pipe(
      map((response: any) => {
        return new loginSuccess({
          token: this.authService.getUserToken(),
          user: response
        });
      }),
      catchError((errorResponse: HttpErrorResponse) => of(new loginFail(errorResponse.error)))
    ))
  )
};
