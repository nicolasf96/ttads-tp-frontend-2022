import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  

  readonly baseURL = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { }
  
  
  getStores(query:any = '', page:any = '', limit: any = '', category: any = '') {
    const url = this.baseURL+'stores?busqueda='+query+'&page='+page+'&limit='+limit+'&categoria='+category
    return this.http.get<any>(url);
  }

  getStoresWithLimit(limit: any) {
    const url = this.baseURL+'stores/limit/'+limit;
    return this.http.get<any>(url);
  }

  getStoresByKeyword(keyword: any) {
    const url = this.baseURL+'stores/keyword/'+keyword;
    return this.http.get<any>(url);
  }

  getStore(id: String) {
    const url = this.baseURL+'stores/'+id;
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
    const url = this.baseURL+'reviews/store/'+identifier;
    return this.http.get<any>(url);
  }

  editStore(storeEdited: any, identifier:any) {
    const url = this.baseURL+'stores/'+identifier
    return this.http.put<any>(url,storeEdited);
  }

  deleteStore(identifier:any) {
    const url = this.baseURL+'stores/'+identifier
    return this.http.delete<any>(url);
  }


}
