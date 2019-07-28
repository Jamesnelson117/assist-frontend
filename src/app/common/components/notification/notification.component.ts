import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: 'assist-common-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {
  private message?: string
  @Input() notificationStream$: Observable<any>;
  
  ngOnInit() {
    this.notificationStream$
    .subscribe(message => {this.message = message});
  }

  dismissNotification() {
    this.message = '';
  };
};
