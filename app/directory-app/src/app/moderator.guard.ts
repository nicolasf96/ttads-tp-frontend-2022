import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ModeratorGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Verificar si el usuario está autenticado y tiene el rol de 'moderator'
    if (this.authService.loggedIn() && this.authService.isModerator()) {
      return true;
    } else {
      // Redirigir a una página de acceso denegado si el usuario no tiene permiso
      this.router.navigate(['/access-denied']);
      return false;
    }
  }
  
}
