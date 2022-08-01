import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/services/images/images.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.scss']
})
export class StoreViewComponent implements OnInit {

  constructor(private service: StoresService,
    private imageService: ImagesService,
    private userService: UsersService,
    private route: ActivatedRoute, private _sanitizer: DomSanitizer) {
   }

  identifier = '';
  identifierUser = '';
  store: any;
  products: any =[];
  reviews: any =[];
  tags:any =[];
  user:any;

  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.identifier = params['id'] );
    this.service.getStore(this.identifier).subscribe( response => this.store = response.data);
    this.loadProducts();
    this.loadReviews();
    this.loadUser();
    console.log(this.store)
    
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
      this.userService.getUser(this.identifierUser).subscribe( response => this.user = response.data);
      console.log(this.user);
  }
  

}
