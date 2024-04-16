import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navigation-panel-store',
  templateUrl: './navigation-panel-store.component.html',
  styleUrls: ['./navigation-panel-store.component.scss']
})
export class NavigationPanelStoreComponent implements OnInit {

    @Input() tienda:any;

    constructor(
      private router: Router,
      private authService: AuthService
    ){

    }

    ngOnInit():void {

    }

  

  goToImagenes(){
    this.router.navigate(['/store-panel/imagenes'])
  }
  goToProductos(){
    this.router.navigate(['/store-panel/productos'])
  }
  goToNegocio(){
    this.router.navigate(['/store-panel/'])
  }


}
