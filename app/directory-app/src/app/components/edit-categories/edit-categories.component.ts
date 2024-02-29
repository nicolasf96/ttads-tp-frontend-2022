import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss'],
})
export class EditCategoriesComponent implements OnInit {
  @Input() identifier: any;
  category: any;
  categoryForm: any;
  categories: any;

  constructor(
    private service: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service
      .getCategory(this.identifier)
      .subscribe((response) => (this.category = response.data));
    this.service
      .getCategories()
      .subscribe((res) => (this.categories = res.data));
    this.crearFormulario();
  }

  ngOnChanges() {
    this.service
      .getCategory(this.identifier)
      .subscribe((response) => (this.category = response.data));
    this.crearFormulario();
  }

  crearFormulario() {
    this.categoryForm = new FormGroup({
      _id: new FormControl(this.category._id, [Validators.required]),
      description: new FormControl(this.category.description, [
        Validators.required,
        Validators.maxLength(12),
      ]),
      categoryParent: new FormControl(this.category.idCategoryParent, [
        Validators.minLength(24),
      ]),
    });
  }

  onSubmit() {
    this.service
      .editCategory(this.categoryForm.value)
      .subscribe((response) => console.log(response));
    this.categoryForm.reset();
  }

  initialize() {
    this.categoryForm.patchValue({
      description: this.category.description,
    });
  }

  deleteCategory(){
    this.service.deleteCategory(this.identifier)
    .subscribe({
      next: (res) => {
        alert('Categoría eliminada exitosamente');
        window.location.reload();
      },
      error: (e) => {
        alert(e.error.message);
      },
    });
  }
}
