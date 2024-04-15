import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

// readonly baseURL = 'https://ttads-tp-backend-2022.onrender.com/api/reviews/'
readonly baseURL = 'http://localhost:3000/api/reviews/'
constructor(private http: HttpClient) { }


getReview() {
  const url = this.baseURL+'products'
  return this.http.get<any>(url);
}

getReviewsByUser(idUser: string) {
  const url = this.baseURL+'user/'+idUser;
  return this.http.get<any>(url);
}

getReviewsByStore(idStore: string) {
  const url = this.baseURL+'store/'+idStore;
  return this.http.get<any>(url);
}

getReviewsByUserAndStore(idUser: string, idStore:string) {
  const url = this.baseURL+'user/'+idUser+'/store/'+idStore;
  return this.http.get<any>(url);
}

createReview(review: any) {
  const url = this.baseURL+''
  return this.http.post<any>(url, review);
}

editReview(review: any) {
  const url = this.baseURL+review._id;
  return this.http.put<any>(url, review);
}

deleteReview(review: any) {
  const url = this.baseURL+review._id;
  return this.http.delete<any>(url);
}



}
