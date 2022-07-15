import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/services/images/images.service';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private service: StoresService, private imageService: ImagesService,
    private route: ActivatedRoute) {
   }

  currentPanel = 'details';
  identifier = '';
  store: any;
  profileImage: any;
  products: any =[];
  reviews: any =[];

  ngOnInit(): void {
    console.log('STOREEEEE')
    this.route.params.subscribe( (params) => this.identifier = params['id'] )
    this.service.getStore(this.identifier).subscribe( response => this.store = response.data);
    this.loadProducts();
    this.loadReviews();
    this.loadImage();
  }


  loadReviews() {
    this.service.getReviewsByStore(this.identifier).subscribe( response => this.reviews = response.data);
    console.log(this.reviews)
  }

  loadProducts() {
    this.service.getProductsByStoreId(this.identifier).subscribe( response => this.products = response.data);
    console.log(this.products)
  }

  loadImage(){
    this.imageService.getImage(this.store.profilePicture).subscribe(response => this.profileImage = response.data)
    console.log(this.profileImage)
  }

  activateDetails(){
    this.currentPanel = 'details';
  }

  activateProducts(){
    this.currentPanel = 'products';
  }

  activateReviews(){
    this.currentPanel = 'reviews';
  }

}
