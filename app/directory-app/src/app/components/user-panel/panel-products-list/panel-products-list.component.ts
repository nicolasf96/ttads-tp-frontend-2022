import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-panel-products-list',
  templateUrl: './panel-products-list.component.html',
  styleUrls: ['./panel-products-list.component.scss']
})
export class PanelProductsListComponent implements OnInit {



  @Input() store:any;
  products: any;

  
  constructor(
    private storeService: StoresService,
    private router: Router) { }

  ngOnInit(): void {
    console.log("this.store")
    console.log(this.store)
    this.loadProducts();
  }

  
  loadProducts(){
    setTimeout(() => {
      this.storeService.getProductsByStoreId(this.store._id).subscribe( response => this.products = response.data)
    }, 1000);
    
  }

  goToProduct(id:any){
    this.router.navigate(['product-details/'+id]);
  }

}
