import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  

  readonly baseURL = 'https://ttads-tp-backend-2022.onrender.com/api/'
  constructor(private http: HttpClient) { }
  
  
  getStores(query:any = '',categoria: any = '', page:any = '', limit: any = '') {
    const url = this.baseURL+'stores?busqueda='+query+'&categoriaID='+categoria+'&page='+page+'&limit='+limit
    return this.http.get<any>(url);
  }

  getAllStores() {
    const url = this.baseURL+'stores/all'
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
