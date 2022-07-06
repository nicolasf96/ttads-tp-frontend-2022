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

  getStore(id: any) {
    const url = this.baseURL+'stores/'+id;
    return this.http.get<any>(url);
  }


}
