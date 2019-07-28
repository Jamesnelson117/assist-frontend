import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootReducer, user } from '../../interfaces';
import { isAdmin, getUser } from 'src/app/store/selectors/auth.selector';

@Component({
  selector: 'assist-common-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user$?: Observable<user>;
  isAdmin$?: Observable<any>;

  constructor(
    private store: Store<RootReducer>
  ) {}

  ngOnInit(): void {
    this.isAdmin$ = this.store.select(isAdmin);
    this.user$ = this.store.select(getUser);
  };
}
