import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ImagesService } from 'src/app/services/images/images.service';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private service: StoresService,
    private imageService: ImagesService,
    private catService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router) {
   }

  currentPanel = 'products';
  identifier = '';
  store: any;
  categories:any = [];
  profileImage: any;
  products: any =[];
  reviews: any =[];
  fileTmp: any;
  photoSelected: any | ArrayBuffer;
  file: any | File;
  editCategory= false;
  actualCat:any;
  addImagesToggle=false;
  addBannerToggle=false;


  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.identifier = params['id'] )
    this.service.getStore(this.identifier).subscribe( response => this.store = response.data);
    this.catService.getCategories().subscribe( response => this.categories = response.data);
    this.loadProducts();
    this.loadReviews();
  }


  loadReviews() {
    this.service.getReviewsByStore(this.identifier).subscribe( response => this.reviews = response.data);
  }

  loadProducts() {
    this.service.getProductsByStoreId(this.identifier).subscribe( response => this.products = response.data);
  }


  activateProducts(){
    this.currentPanel = 'products';
  }

  activateReviews(){
    this.currentPanel = 'reviews';
  }

  onPhotoSelected($event: any){
    if ($event.target.files && $event.target.files[0]) {
      this.file = <File>$event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  async uploadPhoto(){
    this.imageService.createImageProfileStore(this.store._id, this.file).subscribe( response => console.log(response));
    this.service.getStore(this.identifier).subscribe( response => this.store = response.data);

  }

  deleteImageOfStore(imgId:any){
    this.imageService.deleteImage(imgId).subscribe(response => console.log(response))
    this.service.getStore(this.identifier).subscribe( response => this.store = response.data);
  }


  onPhotoSelected2($event: any){
    if ($event.target.files && $event.target.files[0]) {
      this.file = <File>$event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  async addImageToStore(){
    this.imageService.addImageToStore(this.store._id, this.file).subscribe( response => console.log(response));
    this.service.getStore(this.identifier).subscribe( response => this.store = response.data);
    this.addImagesToggle = !this.addImagesToggle;
  }

  onSelectCategory($event:any){
    this.actualCat = $event.target.value;
    console.log($event.target.value)
  }

  editCatToggle(){
    this.editCategory = !this.editCategory;
  }

  changeCategory($event:any){
    if(this.actualCat != '' && this.actualCat != null){
      let tmpCat = {
        "category": this.actualCat
      }
      this.service.editStore(tmpCat,this.store._id).subscribe(response => console.log(response))
      this.editCategory = !this.editCategory;
      this.service.getStore(this.identifier).subscribe( response => this.store = response.data);

    }

  }


  addImageToggle(){
    this.addImagesToggle = !this.addImagesToggle;
  }

  bannerToggle(){
    this.addBannerToggle = !this.addBannerToggle;
  }


  onBannerSelected($event: any){
    if ($event.target.files && $event.target.files[0]) {
      this.file = <File>$event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  async addBannerToStore(){
    this.imageService.createBanner(this.store._id, this.file).subscribe( response => console.log(response));
    this.service.getStore(this.identifier).subscribe( response => this.store = response.data);
    this.addBannerToggle = !this.addBannerToggle;
  }
}
