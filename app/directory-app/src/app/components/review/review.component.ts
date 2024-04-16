import { Component, Input, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images/images.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit{

  baseURL: any;
  noImageURL: any;
  @Input() review: any;

  constructor(
    private imageService: ImagesService
  ){

  }

  ngOnInit():void{
    this.baseURL = this.imageService.getBaseUrl();
    this.noImageURL = this.imageService.getNoImageUrl()
  }

  imageError(event: any){
    event.target.src = this.noImageURL
  }

}
