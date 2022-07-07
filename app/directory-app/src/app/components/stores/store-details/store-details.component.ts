import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {

  @Input()
  store: any;


  constructor() { }

  ngOnInit(): void {
  }

}
