import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly baseURL = 'http://localhost:3000/api/users/'
  constructor(private http: HttpClient,
    private router: Router) { }


  auth(user:any){
    const url = this.baseURL+'login'
    return this.http.post<any>(url,user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getActualId(){
      return localStorage.getItem('id')
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/login'])
  }

  goToPerfilPanel(){

    let userId = localStorage.getItem('id');
    this.router.navigate(['perfil/'+ userId])
  }

  goToStorePanel(){

    let userId = localStorage.getItem('id');
    this.router.navigate(['store-panel/'+ userId])
  }

  
  
}
