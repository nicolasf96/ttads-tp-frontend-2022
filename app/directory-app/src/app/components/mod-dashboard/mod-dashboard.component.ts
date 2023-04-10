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
    this.userService.getUser(this.userIdentifier).subscribe((res) => {
      this.user = res.data;
    });
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res.data;
    });
    this.storesService.getStores().subscribe((res) => {
      this.stores = res.data;
    });
    this.userService.getUsers().subscribe((res) => {
      this.users = res.data;
    });
    this.crearDatos();
  }

  crearDatos() {
    this.data.labels.push('1', '2', '3', '4', '5');
    let newDataSet = {
      data: [10, 18, 19, 28, 16],
      label: 'Series A',
      fill: true,
      tension: 0.4,
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    };
    this.data.datasets.push(newDataSet);
  }
}
