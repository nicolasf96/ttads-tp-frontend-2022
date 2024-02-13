import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products/products.service';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.scss']
})
export class StoreViewComponent implements OnInit {

  constructor(
    private service: StoresService,
    private productService: ProductsService,
    private reviewService: ReviewsService,
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private renderer2: Renderer2) {
   }

   
  identifier = '';
  store: any;
  products: any =[];
  reviews: any =[];
  user:any;
  averageScore: any;

  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.identifier = params['id'] );
    this.service.getStore(this.identifier).subscribe( response => {
      this.store = response.data,
      this.productService.getProductsByStore(this.store._id).subscribe(res => {
        this.products = res.data
      });
      this.reviewService.getReviewsByStore(this.identifier).subscribe( res=>{
        console.log(res.data);
        this.calculateAverageScore(res.data)
      })       
  });

    
  }

  calculateAverageScore(reviews:any) {
    let totalScore = 0;
    let averageScore;
    for (let review of reviews) {
      totalScore += review.score;
    }
    if (reviews.length > 0) {
      averageScore = totalScore / reviews.length;
      this.averageScore = averageScore;
    }
    
  }


  mouseOvered = false;


  
}
