import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
 

  // readonly baseURL = 'https://ttads-tp-backend-2022.onrender.com/api/'
  private baseURL = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { }


  getBaseUrl(): string {
    return this.baseURL;
  }

  getImages() {
    const url = this.baseURL+'images'
    return this.http.get<any>(url);
  }

  getImage(identifier: string) {
    const url = this.baseURL+'images/'+identifier
    return this.http.get<any>(url);
  }

  

  createImageProfileUser(idUser:string, image: File) {
    const url = this.baseURL+'images/profileUser';
    const fd = new FormData();
    fd.append('idUser', idUser);
    fd.append('image', image);

    return this.http.post(url,fd);
  }

  createImageProduct(idProduct:string, image: File) {
    const url = this.baseURL+'images/product';
    const fd = new FormData();
    fd.append('idProduct', idProduct);
    fd.append('image', image);

    return this.http.post(url,fd);
  }

  createImageProfileStore(idStore:string, image: File) {
    const url = this.baseURL+'images/profileStore';
    const fd = new FormData();
    fd.append('idStore', idStore);
    fd.append('image', image);

    return this.http.post(url,fd);
  }

  addImageToStore(idStore:string, image: File) {
    const url = this.baseURL+'images/addToStore';
    const fd = new FormData();
    fd.append('idStore', idStore);
    fd.append('image', image);

    return this.http.post(url,fd);
  }
 

  deleteImage(identifier: string) {
    const url = this.baseURL+'images/'+identifier
    return this.http.delete<any>(url);
  }

  createBanner(idStore:string, image: File) {
    const url = this.baseURL+'images/bannerStore';
    const fd = new FormData();
    fd.append('idStore', idStore);
    fd.append('image', image);

    return this.http.post(url,fd);
  }


}
