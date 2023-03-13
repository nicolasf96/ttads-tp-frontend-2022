import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';
import { UsersService } from 'src/app/services/users/users.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    private router: Router) {
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
  fileTmp: any;
  photoSelected: any | ArrayBuffer;
  file: any | File;
  fileInput = document.querySelector('.file-input');
  fileNameLabel = document.querySelector('#file-name-label');
  selectedOption: any;
  showCatToggle = false;

  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.identifier = params['id'] );
    this.productService.getProduct(this.identifier).subscribe( response => {
      this.product = response.data;
      this.crearFormulario();
    }
    );
    this.crearFormulario();

  }

  
  crearFormulario() {
    this.productForm = new FormGroup({
      title: new FormControl(this.product.title, [Validators.required]),
      description: new FormControl(this.product.description, [Validators.required]),
      location: new FormControl(this.product.location, [Validators.required]),
      used: new FormControl(this.product.used, [Validators.required]),
      price: new FormControl(this.product.price, [Validators.required])
    });
  }

  onSubmit() {
    if (this.productForm.valid){
      let prod = this.productForm.value;
      prod._id = this.product._id;
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




}
