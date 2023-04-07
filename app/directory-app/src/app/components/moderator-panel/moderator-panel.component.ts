import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/services/images/images.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-moderator-panel',
  templateUrl: './moderator-panel.component.html',
  styleUrls: ['./moderator-panel.component.scss']
})
export class ModeratorPanelComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private service: UsersService,
    private imageService: ImagesService) { }

  user: any;
  userIdentifier:any;
  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.userIdentifier = params['id']);
    this.service.getUser(this.userIdentifier).subscribe( res => {
      this.user = res.data;
    }); 
  }

}
