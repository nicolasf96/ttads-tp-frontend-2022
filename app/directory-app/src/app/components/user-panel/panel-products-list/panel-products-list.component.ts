import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images/images.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-panel-products-list',
  templateUrl: './panel-products-list.component.html',
  styleUrls: ['./panel-products-list.component.scss']
})
export class PanelProductsListComponent implements OnInit {



  @Input() store:any;
  products: any;
  productForm:any;
  photoSelected: any | ArrayBuffer;
  file: any | File;
  
  constructor(
    private storeService: StoresService,
    private router: Router,
    private productService: ProductsService,
    private imageService: ImagesService) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.storeService.getProductsByStoreId(this.store._id)
    .subscribe({
      next: (res) => {
        this.products = res.data
      },
      error: (e) => {
        alert(e.error.message)
      },
    });
  }

  


  goToProduct(id:any){
    this.router.navigate(['product-details/'+id]);
  }

  deleteProduct(id:any){
    let data:any;
    this.productService.deleteProduct(id).subscribe(res=> {
      data = res;
      this.products = data.data.products;
    });
  }

  
  crearFormulario() {
    this.productForm = new FormGroup({
      title: new FormControl('',[Validators.required]),
      description: new FormControl(''),
      location: new FormControl(''),
      used: new FormControl(),
      price: new FormControl('')
    })
  }

  onSubmit(){
    if(this.productForm.valid){
      let data:any;
      let prod = this.productForm.value;
      prod.store = this.store._id;

      this.productService.createProduct(prod).subscribe(res=>{
        data=res;
        this.products = data.data.store.products;
        this.imageService.createImageProduct(data.data.product._id,this.file).subscribe(res=>{
          data=res;
          this.products = data.data.products;
          this.photoSelected = '';
        });
      });
      this.productForm.reset();
    }else{
      this.productForm.reset();
    }
    
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

  


}
