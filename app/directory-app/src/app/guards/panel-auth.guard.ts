import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class PanelAuthGuard implements CanActivate {
  
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userId = this.authService.getActualId(); 
    const routeId = next.params['id']; // Obtener el ID de la ruta
    const loggedIn = this.authService.loggedIn();
    
    // Verificar si el usuario tiene permiso para acceder al panel
    if (loggedIn && (userId === routeId)) {
      return true;
    } else {
      this.router.navigate(['**']); // Cambia '/error' por la ruta a la que quieras redirigir si el usuario no tiene permiso
      return false;
    }
  }
  
}
