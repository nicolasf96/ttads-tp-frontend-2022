import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  })

  constructor(
    private route: ActivatedRoute,
    private service: ProductsService) { }


    identifier = '';
    product:any;
    store:any;
    picSlider = 0;
    views: any;


   ngOnInit(): void {

    this.route.params.subscribe( (params) => this.identifier = params['id'] );
    this.service.getProduct(this.identifier).subscribe( (response) => this.product = response.data);
    this.service.getProduct(this.identifier).subscribe( (response) => this.views = response.data.views);

  }

  ngOnDestroy():void{
    this.service.addView(this.identifier, this.views).subscribe( response => console.log(response));
  }

  

  atras(){
    if(this.picSlider == 0){
      this.picSlider = (this.product.images.length * -100)+100;
    }else{
      this.picSlider = this.picSlider + 100;
      console.log(this.picSlider)

    }
  }
  adelante(){
    console.log()
    let x = (this.product.images.length * -100)+100;
    console.log(x)
    if(this.picSlider == x){
      this.picSlider = 0;
    }else{
      this.picSlider = this.picSlider - 100;
      console.log(this.picSlider)

    }
  }

  buscarImg(img:any){
    this.picSlider = this.product.images.indexOf(img)*-100;
    console.log(this.picSlider)
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.contactForm.reset()
  }
  initialize() {
    this.contactForm.reset()
  } 
  
}
