import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images/images.service';
import { UsersService } from 'src/app/services/users/users.service';
import { CommonModule } from '@angular/common'

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {


  identifier = '';
  user: any;
  fileTmp: any;
  photoSelected: any | ArrayBuffer;
  file: any | File;

  constructor(private userService: UsersService,
    private imageService: ImagesService,
    private route: ActivatedRoute,
    private router: Router) { }

  

  ngOnInit(): void {
    this.route.params.subscribe( (params) => this.identifier = params['id'] )
    this.userService.getUser(this.identifier).subscribe( response => { this.user = response.data });
    console.log(this.user);
  }

  loadUser(){
    this.userService.getUser(this.identifier).subscribe( response => { this.user = response.data });
  }

 

  onPhotoSelected($event: any){
    if ($event.target.files && $event.target.files[0]) {
      this.file = <File>$event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  async uploadPhoto(){
    this.imageService.createImageProfileUser(this.user._id, this.file).subscribe( response => console.log(response));
    
    this.loadUser();

  }


}
