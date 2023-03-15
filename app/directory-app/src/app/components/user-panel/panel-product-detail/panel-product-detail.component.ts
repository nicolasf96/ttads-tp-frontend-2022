import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';
import { UsersService } from 'src/app/services/users/users.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImagesService } from 'src/app/services/images/images.service';

@Component({
  selector: 'app-panel-product-detail',
  templateUrl: './panel-product-detail.component.html',
  styleUrls: ['./panel-product-detail.component.scss']
})
export class PanelProductDetailComponent implements OnInit {

  constructor(private productService: ProductsService,
    private storeService: StoresService,
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private imagesService: ImagesService) {
   }

   
  identifier = '';
  identifierUser = '';
  product: any;
  user:any;

  chart: any;
  userIdentifier: any;
  categories: any;
  store: any;
  products: any;
  productForm: any;
  catForm: any;
  showPanel: any;
  showFormBanner: any;
  showDiv= false;
  showForm = false;
  errorToggle = false;
  photoSelected: any | ArrayBuffer;
  file: any | File;

  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.identifier = params['id'] );
    this.productService.getProduct(this.identifier).subscribe( response => {
      this.product = response.data;
      this.crearFormulario();
      });

  }

  
  crearFormulario() {
    this.productForm = new FormGroup({
      title: new FormControl(this.product.title, [Validators.required]),
      description: new FormControl(this.product.description),
      location: new FormControl(this.product.location),
      used: new FormControl(this.product.used),
      price: new FormControl(this.product.price )
    });
  }

  onSubmit() {
    if (this.productForm.valid){
      console.log("ENTRO AL IF")
      let prod = this.productForm.value;
      prod._id = this.product._id;
      console.log(prod)
      this.productService.editProduct(prod).subscribe( response => console.log(response));
      this.showTempDiv();
    }else{
      this.showError();
    }
  }

  
  showTempDiv() {
    this.showDiv = true;
    setTimeout(() => {
      this.showDiv = false;
    }, 5000); // Mostrar durante 3 segundos (3000 milisegundos)
  }
  
  showError(){
    this.errorToggle = !this.errorToggle;
    setTimeout(() => {
      this.errorToggle = false;
    }, 5000); // Mostrar durante 3 segundos (3000 milisegundos)

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

  uploadPhoto(){
    if(this.product.images[0]){
      this.imagesService.deleteImage(this.product.images[0]._id);
    }
    let data:any;
    this.imagesService.createImageProduct(this.product._id, this.file).subscribe( res => {
      data = res;
      this.product = data.data.product;
    });
    this.showTempDiv();
    this.showForm = false;
  }

  deletePhoto(){
    if(this.product.images[0]){
      let data;
      this.imagesService.deleteImage(this.product.images[0]._id).subscribe(res=>{
        this.productService.getProduct(this.product._id).subscribe(res=>{
          data = res;
          this.product = res.data
        })
      });
    }
  }





}
