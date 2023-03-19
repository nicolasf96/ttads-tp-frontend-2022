import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  user = {
    username: '',
    password: ''
  }
  constructor(private service: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }


  login(){
    if(this.user){
      this.service.auth(this.user).subscribe(
        res => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('id',res._id)
          this.router.navigate(['/'])
        },
        err =>{
          console.log(err)
        })
    }
  }
}
