import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { AuthService } from '../../../store/services/auth.service';
import { RootReducer } from '../../interfaces';
import { getIsSignedIn } from '../../../store/selectors/auth.selector';
import { setUser } from '../../../store/actions/auth.actions';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<RootReducer>
  ) {}

  canActivate(): Observable<boolean> {
    return this.isSignedIn().pipe(
      map((authToken) => {
        if (authToken) return (true);
        this.router.navigate(['/login']);
        return false;
      })
    )
  };

  isSignedIn(): Observable<boolean> {
    return this.store.select(getIsSignedIn).pipe(
      tap(isSignedIn => {
        if (this.authService.getUserToken() && !isSignedIn) {
          this.store.dispatch(new setUser(this.authService.getUserId()))
        }
      })
    );
  };
}
