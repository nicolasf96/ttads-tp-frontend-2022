import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-store',
  templateUrl: './mini-store.component.html',
  styleUrls: ['./mini-store.component.scss']
})
export class MiniStoreComponent {

  @Input() store: any;

  constructor(){
    
  }


  

}
