import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'directory-app';
  cssUrl: string;

    constructor(private router: Router, public sanitizer: DomSanitizer) { 
      this.cssUrl = './assets/styleLightMode.css';
    }
  
   

    ngOnInit(): void {
    }

    setStyleMode(mode:any){
      // console.log(mode);
      this.cssUrl = (this.cssUrl === `/assets/styleLightMode.css`) ? `/assets/styleDarkMode.css` : `/assets/styleLightMode.css`;

    }

    onActivate($event:any) {   
      window.scroll({ 
              top: 0, 
              left: 0, 
              behavior: 'smooth' 
       });
   
   }


}
