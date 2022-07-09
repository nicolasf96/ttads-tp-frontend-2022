import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private service: UsersService, private router: Router) { 
    this.loadUsers();
  }

  users:any = []
  ngOnInit(): void {
  }

  loadUsers() {
    this.service.getUsers().subscribe( response => this.users = response);
  }

  
  deleteUser(idUser: string) {
    this.service.deleteUser(idUser).subscribe( response => console.log(response));
    this.loadUsers();
  }

  userDetails(idUser: string) {
    this.router.navigate(['users/'+idUser])
  }

 

}
