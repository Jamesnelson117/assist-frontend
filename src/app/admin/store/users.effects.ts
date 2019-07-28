import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import * as fromActions from "./users.actions";
import { mergeMap, map } from "rxjs/operators";
import { UsersService } from "./users.service";
import { user } from "../../common/interfaces/user";
import { CustomAction } from "../../common/interfaces/store/action";

@Injectable()
export class UserEffects {
  constructor(
    private usersService: UsersService,
    private actions$: Actions
  ) {}

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType(fromActions.UserStoreActionTypes.getUsers),
    mergeMap(() => this.usersService.getUsers()
    .pipe(
      map((users: user[]) => new fromActions.getUsersSuccess(users))
    ))
  );

  @Effect()
  addNewUser$ = this.actions$.pipe(
    ofType(fromActions.UserStoreActionTypes.addNewUser),
    mergeMap((action: CustomAction) => this.usersService.addUser(action.payload)
    .pipe(
      map((newUser: user) => new fromActions.addNewUserSuccess(newUser))
    ))
  );
};