import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  // readonly baseURL = 'https://ttads-tp-backend-2022.onrender.com/api/users/'
  readonly baseURL = 'http://localhost:3000/api/users/';
  userLoggedIn$ = new Subject<void>();
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UsersService
  ) {}

  auth(user: any) {
    const url = this.baseURL + 'login';
    this.userLoggedIn$.next();
    return this.http.post<any>(url, user).pipe( 
      tap(() => {
        window.location.href = '/';
      }));
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }


  hasStore() {
    let id = this.getActualId();
    let data;
    let store;
    if (id) {
      this.userService.getUser(id).subscribe((res) => {
        data = res.data;
        store = data.store;
      });
      if (store) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isModerator(){
    if(localStorage.getItem('role') === 'moderator'){
      return true
    }else{
      return false
    }
  }

  getActualId() {
    return localStorage.getItem('id');
  }


  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  goToPerfilPanel() {
    let userId = localStorage.getItem('id');
    this.router.navigate(['perfil/' + userId]);
  }

  goToStorePanel() {
    this.router.navigate(['store-panel/']);
  }

  goToModeratorPanel(panel: any) {
    let userId = localStorage.getItem('id');
    let user;
    if (userId) {
      this.userService.getUser(userId).subscribe((res) => {
        user = res.data;
        /// if(user.role == 'admin'){
        this.router.navigate(['moderator/' + panel]);
        /// }
      });
    }
  }
}
