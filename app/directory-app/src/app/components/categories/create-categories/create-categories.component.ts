import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { FormGroup, FormControl, Form, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss']
})
export class CreateCategoriesComponent implements OnInit {

  categoryForm = new FormGroup({
    description: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    idCategoryParent: new FormControl('', [Validators.minLength(24)]),
  })

  category:any = {};

  constructor(private service: CategoriesService, private router: Router) { 
    this.categoryForm.valueChanges.subscribe(value => console.log(value));
  }



  ngOnInit(): void {
  }



  onSubmit() {
    console.log("this.categoryForm.value");
    console.log(this.categoryForm.value);
    let cat:any = {
      description: ""
    }
    if(this.categoryForm.value.idCategoryParent === ''){
      cat.description = this.categoryForm.value.description
      this.service.createCategory(cat);
    }else{
      this.service.createCategory(this.categoryForm.value);
    }

    this.router.navigate(['categories'])
  }
  initialize() {
    this.categoryForm.reset()
  }  

}
