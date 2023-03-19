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
  toggle = false;

  categoriesFilter:any = [];

  constructor( private route: ActivatedRoute,
    private storesService: StoresService,
    private categoriesService: CategoriesService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.keyword = params['keySearch'] );
    if(this.keyword == '' || this.keyword == null){
      this.toggle = true;
      this.loadAllStores();
    }else{
      this.loadStores();
    }
    
    this.loadCategories();
  }

  loadAllStores(){
    this.storesService.getStores().subscribe( response => this.storesFiltered = response.data);
  }


  loadStores(){
    this.keyword = this.searchForm.value.keySearch;
    if(this.keyword == '' || this.keyword == null){
      this.storesService.getStores().subscribe( response => {
        this.storesFiltered = response.data
        this.storesFiltered.filter((s: { category: any; }) => this.categoriesFilter._id.includes(s.category._id));

      });

    }else{
      this.storesService.getStoresByKeyword(this.keyword).subscribe( response =>
      {
        this.storesFiltered = response.data;
        this.storesFiltered.filter((s: { category: any; }) => this.categoriesFilter._id.includes(s.category._id));
        console.log(this.storesFiltered);
        console.log(this.categoriesFilter);
      });
    }
  }

  loadCategories(){
    this.categoriesService.getCategories().subscribe( response => this.categories = response.data)
  }


  addCategory(cat:any){
    this.categoriesFilter.push(cat);
    this.loadStores();
  }

  deleteCategory(cat:any){
    this.categoriesFilter.splice(cat);
    this.loadStores();
  }

  onSubmit(){
    // this.storesService.getStoresByKeyword(this.searchForm.value.keySearch).subscribe( response => this.stores = response.data);
    this.keyword = this.searchForm.value.keySearch;
    if(this.keyword == '' || this.keyword == null){
      this.toggle = true;
      this.loadAllStores();
    }else{
      this.toggle = false;
      this.loadStores();
      this.storesFiltered = this.storesFiltered.filter((s: { category: any; }) => this.categoriesFilter._id.includes(s.category._id));

    }
    this.searchForm.reset()
  }

  goToStore(id:any){
    this.router.navigate(['storeDetails/'+id]);
  }

  



}
