import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  constructor(private service: StoresService, private router: Router) {
    this.loadStores();
  }

  stores: any = [];
  store: any;

  ngOnInit(): void {}

  loadStores() {
    this.service
      .getStores()
      .subscribe({
        next: (res) => {
          this.stores = res.data.docs
        },
        error: (e) => {
          alert(e)
        },
      });
  }

  editStore(store: any) {
    this.store = store;
  }
}
