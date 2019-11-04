import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { NotificationService } from './services/notification.service';
import { EmailNotVerifiedComponent } from './popups/email-not-verified';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  durationInSeconds = 5;
  title = 'nine-app';

  constructor (
    private _snackBar: MatSnackBar,
    private notificationService: NotificationService
  ){ 
    this.notificationService.notification$.subscribe(message => {
      this.openSnackBar();
    });
  }

  openSnackBar(){
    this._snackBar.openFromComponent(EmailNotVerifiedComponent, {
      duration: this.durationInSeconds * 1000
    });
  }
}