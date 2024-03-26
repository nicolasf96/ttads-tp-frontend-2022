import { Component, Input, OnInit } from '@angular/core';
import { OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { UsersService } from 'src/app/services/users/users.service';
import { ImagesService } from 'src/app/services/images/images.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-panel-stores',
  templateUrl: './panel-stores.component.html',
  styleUrls: ['./panel-stores.component.scss']
})
export class PanelStoresComponent implements OnInit, OnChanges {

  
    constructor(private route: ActivatedRoute,
      private router: Router,
      private cdRef: ChangeDetectorRef,
      private service: UsersService) { }
     

      panel: any = 'store';
      showPanel: any;
      userIdentifier: any;
      user: any;
      store: any;
      section: any;
      id: any;
      ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        const url = this.route.snapshot.url;
        if (url.length > 2) {
          this.panel = url[2].path;
        } else {
          this.panel = 'store';
        }
        this.route.params.subscribe( (params) => this.userIdentifier = params['id']);
        this.service.getUser(this.userIdentifier).subscribe( res => {
          this.user = res.data;
          this.store = res.data.store;
          if(res.data.store){
            this.showPanel = true;
          }else{
            this.showPanel = false;
          }
          }
        )
      }

    ngOnChanges(changes: SimpleChanges) {
      this.cdRef.detectChanges();

    }
    createStore(){
      this.router.navigate(['/create-store'])
    }


}
