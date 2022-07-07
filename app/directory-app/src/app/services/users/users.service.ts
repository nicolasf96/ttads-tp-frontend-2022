import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  
 
  readonly baseURL = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { }
  
  
  getUsers() {
    const url = this.baseURL+'users'
    return this.http.get<any>(url);
  }

  createUser(newUser: any) {
    const url = this.baseURL+'users'
    return this.http.post<any>(url, newUser);
  }

  deleteUser(idUser: string) {
    const url = this.baseURL+'users/'+idUser;
    return this.http.delete<any>(url);
  }

}
