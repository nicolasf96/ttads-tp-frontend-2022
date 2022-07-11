import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  @Output()
  styleMode = new EventEmitter<boolean>();
  style: boolean;

  constructor() { 
    this.style=false;
 
  }

  ngOnInit(): void {
    this.styleMode.emit(this.style);
  }



  changeStyle() {
    this.style = !this.style;
    this.styleMode.emit(this.style);
  }

  

}
