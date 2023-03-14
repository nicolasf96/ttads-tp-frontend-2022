
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private authService: AuthService,
    private storeService: StoresService,
    private productService: ProductsService
    ) { }
   

    userIdentifier: any;
    user:any;
    products:any;
    storeIdentifier: any;
        


    identifier:any;
    ngOnInit(): void {
      this.route.params.subscribe( (params) => this.storeIdentifier = params['id']);
      this.productService.getProductsByStore(this.storeIdentifier).subscribe(res => this.products = res.data)
      
  }

}