import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images/images.service';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  
  
  constructor(
    private service: StoresService,
    private router: Router,
    private imageService: ImagesService
    ) {
    this.loadStores();
  }

  stores: any = [];
  store: any;
  baseURL: any;

  ngOnInit(): void {
    this.baseURL = this.imageService.getBaseUrl();
  }

  loadStores() {
    this.service
      .getAllStores()
      .subscribe({
        next: (res) => {
          this.stores = res.data
        },
        error: (e) => {
          alert(e.error.message)
        },
      });
  }

  editStore(store: any) {
    this.store = store;
  }
}
