import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  
  readonly baseURL = environment.apiUrl
  constructor(private http: HttpClient) { }
  
  
  getUsers() {
    const url = this.baseURL+'users'
    return this.http.get<any>(url);
  }

  getUser(id: string) {
    const url = this.baseURL+'users/'+id;
    return this.http.get<any>(url);
  }

  getUserByStore(id: string) {
    const url = this.baseURL+'/users/store/'+id+'/user';
    return this.http.get<any>(url);
  }


  createUser(newUser: any) {
    const url = this.baseURL+'users/signup'
    return this.http.post<any>(url, newUser);
  }

  deleteUser(idUser: string) {
    const url = this.baseURL+'users/'+idUser;
    return this.http.delete<any>(url);
  }

  editUser(id:String, userEdited: any) {
    const url = this.baseURL+'users/'+id;
    return this.http.put<any>(url,userEdited);
  }

}
