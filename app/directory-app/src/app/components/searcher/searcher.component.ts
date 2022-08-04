import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {


  
  searchForm2 = new FormGroup({
    keySearch: new FormControl('', [Validators.required, Validators.maxLength(12)])
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  onSubmit() {
    this.router.navigate(['search/'+this.searchForm2.value.keySearch])
  }

}
