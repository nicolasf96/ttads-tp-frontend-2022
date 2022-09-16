import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  @Output()
  styleMode = new EventEmitter<boolean>();

  constructor(public authService: AuthService) { 
 
  }

  ngOnInit(): void {
  }

  


  

}
