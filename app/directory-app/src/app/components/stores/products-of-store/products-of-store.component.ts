import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImagesService } from 'src/app/services/images/images.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-products-of-store',
  templateUrl: './products-of-store.component.html',
  styleUrls: ['./products-of-store.component.scss']
})
export class ProductsOfStoreComponent implements OnInit {


  @Input() store:any;
  products: any;
  productToggle= false;
  fileTmp: any;
  photoSelected: any | ArrayBuffer;
  file: any | File;


  productForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    used: new FormControl(false),
    price: new FormControl(0),
    unit: new FormControl(''),
    unitOM: new FormControl(''),
    store: new FormControl('')
  })
  
  constructor(private imgService: ImagesService,
    private storeService: StoresService,
    private productService: ProductsService,
    private imageService: ImagesService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  
  loadProducts(){
    this.storeService.getProductsByStoreId(this.store._id).subscribe( response => this.products = response.data)
  }

  getImage(idImg:any){
    this.imgService.getImage(idImg).subscribe( response => console.log(response));
  }

  onSubmit() {
    this.productForm.value.store = this.store._id;
    this.productService.createProduct(this.productForm.value).subscribe(response => console.log(response));
    this.initialize();
    this.loadProducts();
  }


  initialize() {
    this.productForm.reset()
  }  

  productsToggle(){
    this.productToggle = !this.productToggle;
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

  async uploadPhoto(prodId:any){
    if(this.file != '' && this.file != null){
      this.imageService.createImageProduct(prodId, this.file).subscribe( response => console.log(response));
      this.loadProducts();

    }

  }

  deleteImageOfProduct(imgId:any){
    this.imageService.deleteImage(imgId).subscribe(response => console.log(response));
    this.loadProducts();
  }



}
