import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews-of-store',
  templateUrl: './reviews-of-store.component.html',
  styleUrls: ['./reviews-of-store.component.scss']
})
export class ReviewsOfStoreComponent implements OnInit {


  @Input() reviews:any;

  constructor() { }

  ngOnInit(): void {
  }

}
