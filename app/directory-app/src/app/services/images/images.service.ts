import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
 

  
  readonly baseURL = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { }
  

  createImage(idUser:string, title:string, image: File) {
    const url = this.baseURL+'images';
    const fd = new FormData();
    fd.append('idUser', idUser);
    fd.append('title', title);
    fd.append('image', image);

    return this.http.post(url,fd);
  }

}
