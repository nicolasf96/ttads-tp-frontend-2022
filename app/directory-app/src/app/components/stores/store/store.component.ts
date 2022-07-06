import { Component, Input, OnInit } from '@angular/core';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private service: StoresService) {
    console.log("Soy Store Component")
   }

  store:any = {}
  @Input() id: any;

  ngOnInit(): void {
    this.loadStore();
  }

  loadStore() {
    console.log("Este es mi id: " +this.id)
    this.service.getStore(this.id).subscribe( response => this.store = response);
  }

}
