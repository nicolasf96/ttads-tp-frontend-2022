import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private authService: AuthService,
    private storeService: StoresService,
    private productService: ProductsService
    ) { }
   

    @Input() store:any;
    storeIdentifier: any;
        


    identifier:any;
    ngOnInit(): void {
/*       this.route.params.subscribe( (params) => this.storeIdentifier = params['id']);
      this.storeService.getStore(this.storeIdentifier).subscribe(res => this.store = res.data.store) */
      
  }




}
