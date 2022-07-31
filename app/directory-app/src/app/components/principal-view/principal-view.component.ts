import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.scss']
})
export class PrincipalViewComponent implements OnInit {

  constructor(private service: StoresService,
    private router: Router) { 
    this.loadStores();
  }

  stores:any = []
  storesSing:any=[];


  ngOnInit(): void {
    console.log(this.stores)
  }

  loadStores() {
    this.service.getStoresWithImage().subscribe( response => this.stores = response.data);
    
  }

  goToStore(id:any){
    this.router.navigate(['storeDetails/'+id]);
  }

}
