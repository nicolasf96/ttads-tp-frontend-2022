import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-store-box-list',
  templateUrl: './store-box-list.component.html',
  styleUrls: ['./store-box-list.component.scss'],
})
export class StoreBoxListComponent implements OnInit {
  constructor(private storeService: StoresService, private router: Router) {}

  @Input() stores: any;
  storesSing: any = [];

  ngOnInit() {}

  goToStore(id: any) {
    this.router.navigate(['/store', id]);
  }
}
