import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ImagesService } from 'src/app/services/images/images.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-moderator-panel',
  templateUrl: './moderator-panel.component.html',
  styleUrls: ['./moderator-panel.component.scss'],
})
export class ModeratorPanelComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private imageService: ImagesService,
    private categoryService: CategoriesService,
    private storesService: StoresService,
    public authService: AuthService
  ) {}

  user: any;
  userIdentifier: any;
  categories: any;
  stores: any;
  users: any;
  panel: any;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => (this.userIdentifier = params['id'])
    );
    this.route.params.subscribe((params) => (this.panel = params['panel']));
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
  }

  showPanel(page: any) {
    this.panel = page;
  }
}
