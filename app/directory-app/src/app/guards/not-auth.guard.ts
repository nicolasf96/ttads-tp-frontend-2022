import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  
  

  constructor(private service: AuthService,
    private router: Router){

  }
  
  canActivate(){
    if(this.service.loggedIn()){
    }else{
      return true
    }

    this.router.navigate(['/']);
    return false

  }

  
}
