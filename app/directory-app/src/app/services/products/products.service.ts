import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 

  readonly baseURL = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { }
  
  
  getProducts() {
    const url = this.baseURL+'products'
    return this.http.get<any>(url);
  }

  getProduct(id: string) {
    const url = this.baseURL+'product/'+id;
    return this.http.get<any>(url);
  }

  getProductsByStore(idStore:any) {
    const url = this.baseURL+'products/store/'+idStore;
    return this.http.get<any>(url);
  }


  createProduct(prod: any) {
    const url = this.baseURL+'products';
    return this.http.post<any>(url, prod);
  }

  editProduct(productEdited: any) {
    const url = this.baseURL+'products/'+productEdited._id
    return this.http.put<any>(url,productEdited);
  }

  addView(identifier: string, views: any) {
    let tmpViews = {
      views: views + 1
    }
    const url = this.baseURL+'products/'+identifier;
    return this.http.put<any>(url,tmpViews);
  }

  deleteProduct(id:any) {
    const url = this.baseURL+'products/'+id;
    return this.http.delete<any>(url);
  }

}
