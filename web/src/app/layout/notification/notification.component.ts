import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {NotificationService} from "../../data/services/notification.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {

  notificationSubscription: Subscription;
  message: string;
  type: string;

  constructor(private notificationService: NotificationService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.message = "";
    this.notificationSubscription = this.notificationService.appNotification$.subscribe(
      (data) => {
        if (data.type !== 'state' && data.payload !== '' && data.payload !== undefined) {

          if (data.type === 'success') {
            this.toastr.success(data.payload, '', {
              timeOut: 9000,
              closeButton: false,
              progressBar: true
            });
          } else if (data.type === 'error') {
            this.toastr.error(data.payload, '', {
              timeOut: 9000,
              closeButton: false,
              progressBar: true
            });
          } else {
            this.toastr.warning(data.payload, '', {
              timeOut: 9000,
              closeButton: false,
              progressBar: true
            });
          }


        }
      }
    );
  }

  closeAlert() {
    this.message = "";
  }

  ngOnDestroy() {
    this.notificationSubscription.unsubscribe();
  }

}
