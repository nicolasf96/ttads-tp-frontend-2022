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
  toggle = false;

  categoriesFilter:any = [];

  constructor( private route: ActivatedRoute,
    private storesService: StoresService,
    private categoriesService: CategoriesService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.keyword = params['keySearch'] );
    if(this.keyword == '' || this.keyword == null){
      this.loadAllStores();
    }else{
      this.loadSearch();
    }
    
    this.loadCategories();
  }

  loadAllStores(){
    this.storesService.getStores().subscribe( response => this.stores = response.data);
  }


  loadSearch(){
    this.storesService.searchStores(this.keyword).subscribe( response => this.stores = response.data)
      
  }

  loadCategories(){
    this.categoriesService.getCategories().subscribe( response => this.categories = response.data)
  }

  redirectTo(category: string) {
    this.keyword = category;
    if(this.keyword == '' || this.keyword == null){
      this.loadAllStores();
    }else{
      this.loadSearch();
    }
  }
  

  onSubmit(){
    // this.storesService.getStoresByKeyword(this.searchForm.value.keySearch).subscribe( response => this.stores = response.data);
    this.keyword = this.searchForm.value.keySearch;
    if(this.keyword == '' || this.keyword == null){
      this.loadAllStores();
    }else{
      this.loadSearch();
    }
    this.searchForm.reset()
  }

  goToStore(id:any){
    this.router.navigate(['store/'+id]);
  }

  



}
