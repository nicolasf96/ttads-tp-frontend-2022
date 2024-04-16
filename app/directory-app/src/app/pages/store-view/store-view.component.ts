import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { ImagesService } from 'src/app/services/images/images.service';
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
    private renderer2: Renderer2,
    private imageService: ImagesService) {
   }

   
  identifier = '';
  store: any;
  products: any =[];
  reviews: any =[];
  user:any;
  averageScore: any;
  baseURL: any;
  noImageURL: any;
  bannerPath: any;
  profilePicturePath: any;

  ngOnInit(): void {
    this.baseURL = this.imageService.getBaseUrl();
    this.noImageURL = this.imageService.getNoImageUrl();
    this.route.params.subscribe( (params) => this.identifier = params['id'] );
    this.service.getStore(this.identifier)
    .subscribe({
      next: (response) => {
        if(response.data.blocked){
          alert('Tienda No disponible')
          this.router.navigate(['listing'])
        }
        this.store = response.data,
        this.bannerPath = this.baseURL + this.store.banner?.path
        this.profilePicturePath = this.baseURL + this.store.profilePicture?.path
        this.productService.getProductsByStore(this.store._id).subscribe(res => {
        this.products = res.data
        });
        this.reviewService.getReviewsByStore(this.identifier).subscribe( res=>{
          this.calculateAverageScore(res.data)
        });
      },
      error: (e) => {
        this.router.navigate(['**'])
      }
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

  bannerError(){
    this.bannerPath = this.noImageURL
  }

  profilePictureError(){
    this.profilePicturePath = this.noImageURL
  }


  
}
