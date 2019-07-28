import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { request } from "../../common/interfaces/request";
import { Store } from "@ngrx/store";
import * as requestActions from "../store/requests.actions";
import { RequestStore } from "../store/requests.reducer";
import { getRequestsSortedByCreatedDate } from "../store/requests.selectors";

@Component({
  selector: 'assist-requests-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
  requests$?: Observable<request[]>;
  searchTerm?: string = "";

  constructor(
    private store: Store<RequestStore>
  ) { }

  ngOnInit(): void {
    this.requests$ = this.store.select(getRequestsSortedByCreatedDate);
    this.store.dispatch(new requestActions.getRequests());
  };

  filterResults(searchTerm: string) {
    this.searchTerm = searchTerm;
  };
}