import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
 

  readonly baseURL = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { }
  
  
  getCategories() {
    const url = this.baseURL+'categories'
    return this.http.get<any>(url);
  }

  createCategory(newCat: any) {
    const url = this.baseURL+'categories';
    console.log("servicio: ", newCat)
    return this.http.post(url,newCat).subscribe(response => this.getCategories());
  }

  deleteCategory(idCategory: any) {
    const url = this.baseURL+'categories/'+idCategory
    return this.http.delete<any>(url);
  }

  editCategory(catEdited: any) {
    const url = this.baseURL+'categories/'+catEdited._id
    return this.http.put<any>(url,catEdited);
  }
  
  


}
