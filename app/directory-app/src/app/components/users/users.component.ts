import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images/images.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any = [];
  p: number = 1;
  n = 6;
  identifier = '';
  baseURL: any;
  constructor(
    private service: UsersService,
    private router: Router,
    private imageService: ImagesService
    ) {
    this.loadUsers();
  }

  ngOnInit(): void {
    this.baseURL = this.imageService.getBaseUrl();
    this.loadUsers();
  }

  loadUsers() {
    this.service
      .getUsers()
      .subscribe((response) => (this.users = response.data));
  }

  deleteUser(idUser: string) {
    this.service
      .deleteUser(idUser)
      .subscribe((response) => console.log(response));
    this.loadUsers();
  }
}
