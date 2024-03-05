import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent {

  query: any;

  searchForm = new FormGroup({
    busqueda: new FormControl('', [Validators.maxLength(20)]),
  });

  constructor(
    private router: Router
  ){

  }

  onSubmit() {
    this.query = this.searchForm.value.busqueda;
    if (this.query == '' || this.query == null) {
      this.router.navigate(['listing']);
    } else {
      this.router.navigate(['listing/' + this.searchForm.value.busqueda]);
    }
    this.searchForm.reset();
  }

}
