import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ImagesService } from 'src/app/services/images/images.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-mod-dashboard',
  templateUrl: './mod-dashboard.component.html',
  styleUrls: ['./mod-dashboard.component.scss'],
})
export class ModDashboardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private imageService: ImagesService,
    private categoryService: CategoriesService,
    private storesService: StoresService
  ) {}

  user: any;
  userIdentifier: any;
  categories: any;
  stores: any;
  users: any;
  panel = 'Dashboard';
  data: any;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => (this.userIdentifier = params['id'])
    );
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res.data;
    });
    this.storesService.getStores()
    .subscribe({
      next: (res) => {
        this.stores = res.data.docs
      },
      error: (e) => {
        alert(e)
      },
    });
    this.userService.getUsers()
    .subscribe({
      next: (res) => {
        this.users = res.data
      },
      error: (e) => {
        alert(e)
      },
    });
  }

  
}
