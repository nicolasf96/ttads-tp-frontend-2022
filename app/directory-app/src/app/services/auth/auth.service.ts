import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly baseURL = 'http://localhost:3000/api/users/';
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UsersService
  ) {}

  auth(user: any) {
    const url = this.baseURL + 'login';
    return this.http.post<any>(url, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  hasStore() {
    let id = this.getActualId();
    let data;
    if (id) {
      this.userService.getUser(id).subscribe((res) => {
        data = res.store;
      });
      if (data) {
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

  getActualId() {
    return localStorage.getItem('id');
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }

  goToPerfilPanel() {
    let userId = localStorage.getItem('id');
    this.router.navigate(['perfil/' + userId]);
  }

  goToStorePanel() {
    let userId = localStorage.getItem('id');
    this.router.navigate(['store-panel/' + userId]);
  }

  goToModeratorPanel(panel: any) {
    let userId = localStorage.getItem('id');
    let user;
    if (userId) {
      this.userService.getUser(userId).subscribe((res) => {
        user = res.data;
        /// if(user.role == 'admin'){
        this.router.navigate(['moderator-panel/' + panel + '/' + userId]);
        /// }
      });
    }
  }
}
