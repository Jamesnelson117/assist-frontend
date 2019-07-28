import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";
import { loginAttempt } from '../../store/actions/auth.actions';
import { RootReducer } from "../../common/interfaces/store/rootReducer";
import { Observable } from "rxjs";
import { getAuthErrorMessage } from "../../store/selectors/auth.selector";

@Component({
  selector: 'assist-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  errorMessage$: Observable<string>

  constructor(
    private FormBuilder: FormBuilder,
    private store: Store<RootReducer>
  ) {}

  ngOnInit() {
    this.errorMessage$ = this.store.select(getAuthErrorMessage);
    this.login = this.FormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(formValues: FormGroup): any {
    this.store.dispatch(new loginAttempt(formValues.value));
  };

  reset(): void {
    this.login.value.username = '';
    this.login.value.password = '';
  };
};
