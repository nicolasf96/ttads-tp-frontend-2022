import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {


  userForm: any;
  response: any;

    constructor(
      private userService: UsersService,
      private router: Router,
      private authService: AuthService
    ){

    }

    ngOnInit(): void {

      this.crearFormulario();

      
  }

  crearFormulario(){
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    })
  }

  

  onSubmit() {
    let data;
    if(this.userForm.valid){
      this.userService.createUser(this.userForm.value).subscribe(
        res =>{
          data = res.userStored;
          this.response = res.message;
          this.router.navigate(['/login'])
        }
      )
    }else{
      this.userForm.reset();
    }
    if(data){
      this.authService.auth(data).subscribe(
        res => {
        localStorage.setItem('token', res.token),
        localStorage.setItem('role', res.role),
        localStorage.setItem('id',res._id),
          this.router.navigate(['/'])
        },
        err =>{
          console.log(err)
        })
    }
  }
}
