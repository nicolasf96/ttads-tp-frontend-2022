import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.scss'],
})
export class PrincipalViewComponent implements OnInit {
  searchForm = new FormGroup({
    keySearch: new FormControl('', [Validators.maxLength(12)]),
  });

  constructor(
    private storeService: StoresService,
    private categoryService: CategoriesService,
    private router: Router
  ) {
    this.loadCategories();
  }

  keyword: any;
  stores: any = [];
  categories: any = [];
  storesSing: any = [];
  limit = 6;

  ngOnInit(): void {
    this.storeService
      .getStoresWithLimit(this.limit)
      .subscribe((response) => (this.stores = response.data));
    console.log(this.stores);
  }

  loadCategories() {
    this.categoryService
      .getCategories()
      .subscribe((response) => (this.categories = response.data));
  }

  goToStore(id: any) {
    this.router.navigate(['store/' + id]);
  }

  onSubmit() {
    this.keyword = this.searchForm.value.keySearch;
    if (this.keyword == '' || this.keyword == null) {
      this.router.navigate(['listing']);
    } else {
      this.router.navigate(['listing/' + this.searchForm.value.keySearch]);
    }
    this.searchForm.reset();
  }
}
