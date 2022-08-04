import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:any = []


  constructor(private service: UsersService, private router: Router) { 
    this.loadUsers();
  }


  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.service.getUsers().subscribe( response => this.users = response.data);
  }

  
  deleteUser(idUser: string) {
    this.service.deleteUser(idUser).subscribe( response => console.log(response));
    this.loadUsers();
  }

  userDetails(idUser: string) {
    this.router.navigate(['users/'+idUser])
  }

 

}
