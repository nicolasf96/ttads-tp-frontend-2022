import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private service: CategoriesService) { 
    this.loadCategories();
  }

  categories:any = []
  ngOnInit(): void {
  }

  loadCategories() {
    this.service.getCategories().subscribe( response => this.categories = response);
  }

}
