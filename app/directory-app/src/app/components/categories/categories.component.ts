import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Category } from 'src/app/models/category';
import { Router } from '@angular/router';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private service: CategoriesService, private router: Router) { 
    this.loadCategories();
  }

  categories:any = []
  
  ngOnInit(): void {
  }


  data = {
    labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
        "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
    ],
    datasets: [
        {
            name: "Some Data", type: "bar",
            values: [25, 40, 30, 35, 8, 52, 17, -4]
        },
        {
            name: "Another Set", type: "line",
            values: [25, 50, -10, 15, 18, 32, 27, 14]
        }
    ]
}

  loadCategories() {
    this.service.getCategories().subscribe( response => this.categories = response.data);
  }

  deleteCategory(idCategory: any) {
    this.service.deleteCategory(idCategory).subscribe( response => console.log(response));
    this.loadCategories();
  }

  categoryDetails(idCategory: string) {
    this.router.navigate(['categories/'+idCategory])
  }

  

}
