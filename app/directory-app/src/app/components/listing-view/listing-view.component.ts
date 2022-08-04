import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
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

  categoriesForm = new FormGroup({
    keySearch: new FormControl('', [Validators.required])
  })

  keyword:any ;
  stores:any;
  categories:any;
  storesFiltered:any;

  categoriesFilter:any = [];

  constructor( private route: ActivatedRoute,
    private storesService: StoresService,
    private categoriesService: CategoriesService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.keyword = params['keySearch'] );
    this.loadStores();
    this.loadCategories();
  }

  loadStores(){
    this.storesService.getStoresByKeyword(this.keyword).subscribe( response => this.stores = response.data);
    console.log("categories Filter " +this.categoriesFilter)
  }

  loadCategories(){
    this.categoriesService.getCategories().subscribe( response => this.categories = response.data)
  }

  onSubmit(){
    this.storesService.getStoresByKeyword(this.searchForm.value.keySearch).subscribe( response => this.stores = response.data);
    this.keyword = this.searchForm.value.keySearch;
    this.categoriesFilter = [];
    this.searchForm.reset()
  }

  goToStore(id:any){
    this.router.navigate(['storeDetails/'+id]);
  }

  



}
