import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
 

  
  readonly baseURL = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { }
  
  getCategories() {
    const url = this.baseURL+'images'
    return this.http.get<any>(url);
  }

  createImage(body: FormData, idUser: string) {
    const url = this.baseURL+'images/'+idUser;
    console.log(idUser);
    console.log(body);
    return this.http.post(url,body);
  }

}
