import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.scss']
})
export class ListingViewComponent implements OnInit {

  searchForm = new FormGroup({
    keySearch: new FormControl('', [Validators.required])
  })

  keyword:any ;
  stores:any;

  constructor( private route: ActivatedRoute,
    private storesService: StoresService) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.keyword = params['keySearch'] );
    this.loadStores();
  }

  loadStores(){
    this.storesService.getStoresByKeyword(this.keyword).subscribe( response => this.stores = response.data)
  }

}
