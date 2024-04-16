import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent {

  valor:any;

  searchForm: any;
  

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){

  }

  ngOnInit():void{
    this.route.queryParamMap
    .subscribe({
      next: (params: ParamMap) => {
        this.valor = params.get('query');
      },
      error: (e) =>{
        console.log(e.error.message);
      }
    })
    this.crearFormulario()
  }

  crearFormulario(){
    this.searchForm = new FormGroup({
      busqueda: new FormControl(this.valor, [Validators.maxLength(20)]),
    });
  }

  onSubmit() {
    const query = this.searchForm.value.busqueda;
    if (query && query.trim() !== '') {
      this.router.navigate(['listing'], { queryParams: { query: query } });
    } else {
      this.router.navigate(['listing']);
    }
  }

}
