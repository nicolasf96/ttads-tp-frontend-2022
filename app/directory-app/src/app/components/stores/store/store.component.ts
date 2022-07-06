import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private service: StoresService,
    private route: ActivatedRoute) {
    console.log("Soy Store Component")
   }

  identifier = '';
  store: any;

  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.identifier = params['id'] )
    this.service.getStore(this.identifier).subscribe( response => this.store = response.data);
  }

  loadStore() {
    console.log("Este es mi id: " +this.identifier)
    this.service.getStore(this.identifier).subscribe( response => this.store = response);
    console.log(this.store)
  }

}
