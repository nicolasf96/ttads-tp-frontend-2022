import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-panel-nav',
  templateUrl: './panel-nav.component.html',
  styleUrls: ['./panel-nav.component.scss']
})
export class PanelNavComponent implements OnInit {

  @Output()
  propagar = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  goToStoresPanel(){
    this.propagar.emit('stores');
  }

  goToPerfilPanel(){
    this.propagar.emit('perfil');
  }

}
