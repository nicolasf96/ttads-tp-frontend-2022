import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  
  
  
 
  

  readonly baseURL = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { }
  
  
  getStores() {
    const url = this.baseURL+'stores'
    return this.http.get<any>(url);
  }

  getStoresWithImage() {
    const url = this.baseURL+'stores/images/'
    return this.http.get<any>(url);
  }


  getStore(id: String) {
    const url = this.baseURL+'stores/'+id;
    console.log(url);
    return this.http.get<any>(url);
  }

  getProductsByStoreId(identifier: string) {
    const url = this.baseURL+'products/'+identifier;
    return this.http.get<any>(url);
  }

  createStore(store: any) {
    const url = this.baseURL+'stores';
    return this.http.post<any>(url, store);
  }

  getReviewsByStore(identifier: string) {
    const url = this.baseURL+'reviews/'+identifier;
    return this.http.get<any>(url);
  }


}
