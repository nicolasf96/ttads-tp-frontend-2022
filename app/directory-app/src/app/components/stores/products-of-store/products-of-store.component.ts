import { Component, Input, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images/images.service';

@Component({
  selector: 'app-products-of-store',
  templateUrl: './products-of-store.component.html',
  styleUrls: ['./products-of-store.component.scss']
})
export class ProductsOfStoreComponent implements OnInit {


  @Input() products:any;

  
  constructor(private imgService: ImagesService) { }

  ngOnInit(): void {

    console.log(this.products)
  }


  getImage(idImg:any){
    this.imgService.getImage(idImg).subscribe( response => console.log(response));
  }



}
