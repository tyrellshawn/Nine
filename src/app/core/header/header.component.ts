import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
<<<<<<< HEAD
  constructor(
    private authService: AuthService,
    private router: Router,
    private _ngZone: NgZone
  ) {}
=======
  
  constructor(private authService: AuthService, private router: Router, private _ngZone: NgZone) { }
>>>>>>> web-app

  isOpen: boolean = false;

  ngOnInit() {
    this.authService.authenticationStateSubscription.subscribe(correct => {
      if (!!this.isAuthenticated) {
<<<<<<< HEAD
        this._ngZone.run(() => this.router.navigate(['/home']));
=======
        this._ngZone.run(() => this.router.navigate(['/home']))
>>>>>>> web-app
      }
    });
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logoutUser(): void {
    this.authService.logoutUser();
    this.router.navigate(['/home']);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
