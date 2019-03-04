import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router) { }

  isOpen: boolean = false;

  ngOnInit() {}

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
