import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.scss']
})
export class StoresListComponent implements OnInit {


  @Input() stores:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToStore(id:any){
    this.router.navigate(['storeDetails/'+id]);
  }

}
