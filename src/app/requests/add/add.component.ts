import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { addRequest } from "../store/requests.actions";
import { RequestStore } from "../store/requests.reducer";
import { AuthService } from "../../store/services/auth.service";

@Component({
  selector: 'assist-add-request',
  templateUrl: './add.component.html'
})
export class AddRequestComponent implements OnInit {
  newRequest: FormGroup;
  errorMessage?: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<RequestStore>
  ) {}

  ngOnInit() {
    this.newRequest = this.formBuilder.group({
      title: ['', Validators.required],
      message: ['', Validators.required],
      priority: ['low', Validators.required],
    });
  }

  submitRequest() {
    if(!this.newRequest.valid) return this.errorMessage = "Not a valid request";
    const formVal = Object.assign({}, this.newRequest.value,
       { author: this.authService.getDecodedAuthToken().id });
    this.store.dispatch(new addRequest(formVal));
    this.router.navigate(['/']);
  }
}