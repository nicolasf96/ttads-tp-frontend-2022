import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { StoresService } from 'src/app/services/stores/stores.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.scss']
})
export class StoreViewComponent implements OnInit {

  constructor(private service: StoresService,
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private renderer2: Renderer2) {
   }

   
  identifier = '';
  identifierUser = '';
  store: any;
  products: any =[];
  reviews: any =[];
  user:any;

  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.identifier = params['id'] );
    this.service.getStore(this.identifier).subscribe( response => this.store = response.data);
    this.loadReviews();
    this.loadProducts();
    this.loadUser();
    
  }


  loadReviews() {
    this.service.getReviewsByStore(this.identifier).subscribe( response => this.reviews = response.data);
    console.log(this.reviews)
  }

  loadProducts() {
    this.service.getProductsByStoreId(this.identifier).subscribe( response => this.products = response.data);
    console.log(this.products)
  }

  loadUser(){
      this.userService.getUserByStore(this.identifier).subscribe( response => this.user = response.data);
      console.log(this.user);
  }

  mouseOvered = false;

  goToProduct(productId:any) {
    this.router.navigate(['product/'+productId])
  }

  
}