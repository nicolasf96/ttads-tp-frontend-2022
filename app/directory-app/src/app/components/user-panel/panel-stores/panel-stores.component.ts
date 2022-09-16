import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-panel-stores',
  templateUrl: './panel-stores.component.html',
  styleUrls: ['./panel-stores.component.scss']
})
export class PanelStoresComponent implements OnInit {

  
    constructor(private route: ActivatedRoute,
      private service: UsersService,
      private router: Router,
      private storesService: StoresService) { }
  
      storeForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        valoration: new FormControl('', [Validators.required]),
        user: new FormControl('')
      })
    


      userIdentifier: any;
      user:any;


      identifier:any;
      ngOnInit(): void {
        this.route.params.subscribe( (params) => this.userIdentifier = params['id']);
        this.service.getUser(this.userIdentifier).subscribe( res => this.user = res.data);
   
  
    }

    onSubmit() {
      this.storeForm.value.user = this.userIdentifier;
      this.storesService.createStore(this.storeForm.value).subscribe( response => console.log(response));
      this.service.getUser(this.userIdentifier).subscribe( res => this.user = res.data);
    }
  
  
    initialize() {
      this.storeForm.reset()
    }  
  

}
