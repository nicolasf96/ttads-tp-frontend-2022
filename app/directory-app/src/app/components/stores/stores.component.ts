import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  constructor(private service: StoresService,
    private router: Router) { 
    this.loadStores();
  }

  stores:any = []


  ngOnInit(): void {
  }

  loadStores() {
    this.service.getStores().subscribe( response => this.stores = response.data);
  }

  goToStore(id:any){
    this.router.navigate(['store/'+id])
  }

}
