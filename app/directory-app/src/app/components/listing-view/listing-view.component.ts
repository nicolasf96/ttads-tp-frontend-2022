import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.scss']
})
export class ListingViewComponent implements OnInit {

  query:any = '' ;
  stores:any;
  totalDocs: any;
  categories:any;
  toggle = false;
  page: any = '';
  limit: any = '';
  data:any;
  selectedCategory: string | null = null;
  categoriaID: any = '';

  constructor( private route: ActivatedRoute,
    private storesService: StoresService,
    private categoriesService: CategoriesService,
    private router: Router,
    private spinnerService: SpinnerService) { 
      this.spinnerService.show();
    }

  ngOnInit(): void {
    this.route.queryParamMap
    .subscribe({
      next: (params: ParamMap) => {
        this.query = params.get('query');
        this.page = params.get('page');
        this.limit = params.get('limit');
        this.loadSearch()
      },
      error: (e) => {
        alert(e.error.message)
      },
    });
    this.loadCategories();
  }

  loadSearch(){
    let q
    if(this.query == '' || this.query == null){
      q = ''
    }else{
      q = this.query
    }
    this.storesService.getStores(q,this.categoriaID,this.page,this.limit)
    .subscribe({
      next: (res) => {
        this.stores = res.data.docs
        this.data = res.data;
        this.totalDocs = res.data.totalDocs;
      },
      error: (e) => {
        alert(e.error.message)
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

  filtroCategoria(cat: any) {
    this.selectedCategory = cat.description;
    this.categoriaID = cat._id;
    this.loadSearch();
  }
  borrarFiltro(){
    this.selectedCategory = ''
    this.categoriaID = ''
    this.loadSearch();
  }

  goToStore(id:any){
    this.router.navigate(['store/'+id]);
  }

  



}
