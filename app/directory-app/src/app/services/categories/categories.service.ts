import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
 
  readonly baseURL = environment.apiUrl
  constructor(private http: HttpClient) { }
  
  
  getCategories() {
    const url = this.baseURL+'categories'
    return this.http.get<any>(url);
  }

  getCategory(identifier: string) {
    const url = this.baseURL+'categories/'+identifier
    return this.http.get<any>(url);
  }

  createCategory(newCat: any) {
    const url = this.baseURL+'categories';
    return this.http.post(url,newCat);
  }

  deleteCategory(idCategory: any) {
    const url = this.baseURL+'categories/'+idCategory
    return this.http.delete<any>(url);
  }

  editCategory(catEdited: any) {
    console.log("servicio: ", catEdited)
    const url = this.baseURL+'categories/'+catEdited._id
    return this.http.put<any>(url,catEdited);
  }
  
  


}
