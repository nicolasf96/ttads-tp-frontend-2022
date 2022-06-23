import { Component, OnInit } from '@angular/core';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  constructor(private service: StoresService) { 
    this.loadStores();
  }

  stores:any = []
  ngOnInit(): void {
  }

  loadStores() {
    this.service.getStores().subscribe( response => this.stores = response);
  }

}
