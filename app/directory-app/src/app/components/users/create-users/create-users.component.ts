import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {
  
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  })

 

  user:any = {};
  private fileTmp:any;

  constructor(private service: UsersService, private router: Router) { 
  }



  ngOnInit(): void {
  }


  onSubmit() {
    
    this.router.navigate(['users'])
  }


  initialize() {
    this.userForm.reset()
  }  

  
}
