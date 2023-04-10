import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss']
})
export class EditCategoriesComponent implements OnInit {

  categoryForm = new FormGroup({
    description: new FormControl('', [Validators.required, Validators.maxLength(12)]),
    idCategoryParent: new FormControl('', [Validators.minLength(24)]),
  })

  identifier = '';
  category: any;


  constructor(private service: CategoriesService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.identifier = params['id'] )
    this.service.getCategory(this.identifier).subscribe( response => this.category = response.data);
  }


  onSubmit() {
    console.log("this.categoryForm.value");
    console.log(this.categoryForm.value);
    this.category.description = this.categoryForm.value.description;
    this.service.editCategory(this.category).subscribe( response => console.log(response));;
    this.router.navigate(['categories'])
  }

  initialize(){
    this.categoryForm.patchValue({
      description: this.category.description
    })
  }

 }


