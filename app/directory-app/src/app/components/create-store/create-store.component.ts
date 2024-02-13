import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.scss']
})
export class CreateStoreComponent implements OnInit {

    storeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    address: new FormControl(''),
    city: new FormControl(''),
    valoration: new FormControl('')
  })

 

  store:any = {};

  constructor(private service: StoresService, private router: Router) { 
  }



  ngOnInit(): void {
  }


  onSubmit() {
    this.service.createStore(this.storeForm.value).subscribe(response => console.log(response));
    this.router.navigate(['stores'])
  }


  initialize() {
    this.storeForm.reset()
  }  

}
