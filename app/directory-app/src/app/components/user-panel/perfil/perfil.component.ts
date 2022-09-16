import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  @Input()
  user: any;
  userIdentifier: any;



  constructor(private route: ActivatedRoute,
    private service: UsersService) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.userIdentifier = params['id']);
    this.service.getUser(this.userIdentifier).subscribe( res => this.user = res.data);
  }

}
