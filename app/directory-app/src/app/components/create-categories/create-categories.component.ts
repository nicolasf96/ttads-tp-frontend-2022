import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss'],
})
export class CreateCategoriesComponent implements OnInit {
  categoryForm = new FormGroup({
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    categoryParent: new FormControl('', [Validators.minLength(24)]),
  });

  category: any = {};
  categories: any;

  constructor(
    private service: CategoriesService,
    private router: Router,
    private categoryService: CategoriesService
  ) {
    this.categoryForm.valueChanges.subscribe((value) => console.log(value));
  }

  ngOnInit(): void {
    this.categoryService
      .getCategories()
      .subscribe((res) => (this.categories = res.data));
  }

  onSubmit() {
    let cat: any = {
      description: '',
    };
    if (this.categoryForm.value.categoryParent === '') {
      cat.description = this.categoryForm.value.description;
      this.service.createCategory(cat);
    } else {
      this.service.createCategory(this.categoryForm.value);
    }
    location.reload();
  }
  initialize() {
    this.categoryForm.reset();
  }
}
