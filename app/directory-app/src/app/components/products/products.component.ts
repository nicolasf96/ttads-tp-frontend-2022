
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImagesService } from 'src/app/services/images/images.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  baseURL: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private authService: AuthService,
    private storeService: StoresService,
    private productService: ProductsService,
    private imageService: ImagesService
    ) { }
   

    userIdentifier: any;
    user:any;
    @Input() products: any;
        


    identifier:any;
    ngOnInit(): void {
      this.baseURL = this.imageService.getBaseUrl()

  }

}