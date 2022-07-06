import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private service: UsersService) { 
    this.loadUsers();
  }

  users:any = []
  ngOnInit(): void {
  }

  loadUsers() {
    this.service.getUsers().subscribe( response => this.users = response);
  }

 

}
