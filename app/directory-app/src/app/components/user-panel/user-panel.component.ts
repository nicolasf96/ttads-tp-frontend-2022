import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {


  currentPanel = 'perfil';
  userIdentifier: any;
  user:any;

  constructor(private route: ActivatedRoute,
    private service: UsersService) { }

  ngOnInit(): void {

      this.route.params.subscribe( (params) => this.userIdentifier = params['id']);
      this.service.getUser(this.userIdentifier).subscribe( res => this.user = res.data);
 

  }


  procesaPropagar(mensaje:any){
    this.currentPanel = mensaje;
    console.log("PADRE: "+mensaje)
  }

}
