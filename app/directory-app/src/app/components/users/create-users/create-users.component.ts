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
    
    const body = new FormData();
    body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
    body.append('email', this.userForm.value.email);
    body.append('username', this.userForm.value.username)
    body.append('password', this.userForm.value.password)
    body.append('firstName', this.userForm.value.firstName)
    body.append('lastName', this.userForm.value.lastName)
    body.append('phone', this.userForm.value.phone)
    console.log( this.userForm.value);
    console.log( body );

    this.service.createUser(body).subscribe(response => console.log(response));
    //this.router.navigate(['users'])
  }


  initialize() {
    this.userForm.reset()
  }  

  getFile($event: any){
    const [ file ] = $event.target.files;
    this.fileTmp = {
      fileRaw: file,
      fileName: file.name
    }
  }
}
