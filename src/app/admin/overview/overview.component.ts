import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { user } from 'src/app/common/interfaces';
import { UsersState } from '../store/users.reducer';
import { getUsers } from '../store/users.actions';
import { getAllUsers } from '../store/users.selectors';

@Component({
  selector: 'assist-admin-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {
  users$: Observable<user[]>;

  constructor(
    private store: Store<UsersState>
  ) {}

  ngOnInit(): any {
    this.store.dispatch(new getUsers());
    this.users$ = this.store.select(getAllUsers);
  };
}
