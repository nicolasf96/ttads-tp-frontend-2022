import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-of-store',
  templateUrl: './products-of-store.component.html',
  styleUrls: ['./products-of-store.component.scss']
})
export class ProductsOfStoreComponent implements OnInit {


  @Input() products:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
