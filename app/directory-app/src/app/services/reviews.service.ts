import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {


readonly baseURL = 'http://localhost:3000/api/'
constructor(private http: HttpClient) { }


getReview() {
  const url = this.baseURL+'products'
  return this.http.get<any>(url);
}

getReviewsByUser(idUser: string) {
  const url = this.baseURL+'reviewsByUser/'+idUser;
  return this.http.get<any>(url);
}

getReviewsByStore(idStore: string) {
  const url = this.baseURL+'reviews/'+idStore;
  return this.http.get<any>(url);
}

getReviewsByUserAndStore(idUser: string, idStore:string) {
  const url = this.baseURL+'reviewsByUserAndStore/'+idUser+'/'+idStore;
  return this.http.get<any>(url);
}




createReview(review: any) {
  const url = this.baseURL+'review'
  return this.http.post<any>(url, review);
}



}
