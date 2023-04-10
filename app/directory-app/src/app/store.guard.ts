import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class StoreGuard implements CanActivate {
  constructor(
    private service: AuthService,
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate() {
    if (this.service.loggedIn() && !this.service.hasStore()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
