import { Component, Input, OnInit } from '@angular/core';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-images-of-store',
  templateUrl: './images-of-store.component.html',
  styleUrls: ['./images-of-store.component.scss']
})
export class ImagesOfStoreComponent implements OnInit {

  @Input() store:any;
  
  constructor(
    private storeService: StoresService) { }

  ngOnInit(): void {
  }

  


}
