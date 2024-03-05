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

  query:any ;
  stores:any;
  totalDocs: any;
  categories:any;
  toggle = false;
  page: any = '';
  limit: any = '';

  constructor( private route: ActivatedRoute,
    private storesService: StoresService,
    private categoriesService: CategoriesService,
    private router: Router) { }

  ngOnInit(): void {


    this.route.params
    .subscribe({
      next: (params) => {
        this.query = params['query']
        this.page = this.route.snapshot.queryParamMap.get('page');
        this.limit = this.route.snapshot.queryParamMap.get('limit')
        if(this.query == '' || this.query == null){
          this.loadAllStores();
        }else{
          this.loadSearch();
        }
      },
      error: (e) => {
        alert(e)
      },
    });

    this.loadCategories();
  }


  loadAllStores(){
    console.log('ENTRAMOS ACA');
    this.storesService.getStores()
    .subscribe({
      next: (res) => {
        this.stores = res.data.docs;
        this.totalDocs = res.data.totalDocs;

      },
      error: (e) => {
        alert(e.error)
      },
    });
  }
  loadSearch(){
    this.storesService.getStores(this.query,this.page,this.limit)
    .subscribe({
      next: (res) => {
        this.stores = res.data.docs
        this.totalDocs = res.data.totalDocs;
      },
      error: (e) => {
        alert(e.error)
      },
    });
  }

  loadCategories(){
    this.categoriesService.getCategories()
    .subscribe({
      next: (res) => {
        this.categories = res.data
      },
      error: (e) => {
        alert(e.error)
      },
    })
  }

  redirectTo(category: string) {
    this.query = category;
    if(this.query == '' || this.query == null){
      this.loadAllStores();
    }else{
      this.loadSearch();
    }
  }

  goToStore(id:any){
    this.router.navigate(['store/'+id]);
  }

  



}
