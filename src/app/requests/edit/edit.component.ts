import { Component, OnInit } from "@angular/core";
import { request } from "../../common/interfaces/request";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getSelectedRequest } from "../store/requests.selectors";
import * as requestActions from "../store/requests.actions";
import { RequestStore } from "../store/requests.reducer";

@Component({
  selector: 'assist-edit-request',
  templateUrl: './edit.component.html'
})

export class EditRequestComponent implements OnInit {
  request$: Observable<request>;
  editRequest?: FormGroup;
  errorMessage?: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<RequestStore>
  ) {}

  ngOnInit() {
    this.request$ = this.store.select(getSelectedRequest);
    this.store.dispatch(new requestActions.getRequests());
   
    this.editRequest = this.formBuilder.group({
      title: ['', Validators.required],
      message: ['', Validators.required],
      priority: ['', Validators.required],
    });
  };

  updateRequest(ID: string) {    
    if (!this.editRequest.valid) return this.errorMessage = 'Not a valid request';
    
    this.store.dispatch(new requestActions.patchRequest({
      requestID: ID,
      edits: this.editRequest.value
    }));
  }
}