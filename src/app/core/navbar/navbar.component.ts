import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private _ngZone: NgZone,
  ) {}

  isOpen: boolean = false;

  ngOnInit() {
    this.authService.authenticationStateSubscription.subscribe(correct => {
      if (!!this.isAuthenticated) {
        this._ngZone.run(() => this.router.navigate(['/home']));
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
