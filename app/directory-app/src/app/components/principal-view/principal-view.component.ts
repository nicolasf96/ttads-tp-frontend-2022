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


  constructor(
    private storeService: StoresService,
    private categoryService: CategoriesService,
    private router: Router
  ) {
    this.loadCategories();
  }

  stores: any = [];
  categories: any = [];
  storesSing: any = [];
  limit = 8;

  ngOnInit(): void {
    this.storeService
      .getStores('',1,this.limit)
      .subscribe({
        next: (res) => {
          this.stores = res.data.docs
        },
        error: (e) => {
          alert(e)
        },
      });
  }

  loadCategories() {
    this.categoryService
      .getCategories()
      .subscribe((response) => (this.categories = response.data));
  }

  goToStore(id: any) {
    this.router.navigate(['store/' + id]);
  }


}
