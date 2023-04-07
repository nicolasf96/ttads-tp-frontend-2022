import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ImagesService } from 'src/app/services/images/images.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { UsersService } from 'src/app/services/users/users.service';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-mod-dashboard',
  templateUrl: './mod-dashboard.component.html',
  styleUrls: ['./mod-dashboard.component.scss']
})
export class ModDashboardComponent implements OnInit {


  title = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private route: ActivatedRoute,
    private userService: UsersService,
    private imageService: ImagesService,
    private categoryService: CategoriesService,
    private storesService: StoresService) { }

  user: any;
  userIdentifier:any;
  categories: any;
  stores: any;
  users:any;
  panel = 'Dashboard';

  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.userIdentifier = params['id']);
    this.userService.getUser(this.userIdentifier).subscribe( res => {
      this.user = res.data;
    }); 
    this.categoryService.getCategories().subscribe(res=>{
      this.categories = res.data;
    })
    this.storesService.getStores().subscribe(res=>{
      this.stores = res.data;
    })
    this.userService.getUsers().subscribe(res=>{
      this.users = res.data;
    })
  }

}
