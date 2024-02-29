import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private service: CategoriesService, private router: Router) {
    this.loadCategories();
  }

  categories: any = [];
  identifier: any = '';

  ngOnInit(): void {}

  loadCategories() {
    this.service
      .getCategories()
      .subscribe((response) => (this.categories = response.data));
  }

  deleteCategory(idCategory: any) {
    this.service.deleteCategory(idCategory);
    this.loadCategories();
  }

  categoryDetails(idCategory: string) {
    this.router.navigate(['categories/' + idCategory]);
  }


}
