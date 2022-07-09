import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images/images.service';
import { UsersService } from 'src/app/services/users/users.service';

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
    this.userService.getUser(this.identifier).subscribe( response => this.user = response.data);
  }

  getFile($event: any){
    /* const [ file ] = $event.target.files;
    this.fileTmp = {
      fileRaw: file,
      fileName: file.name
    } */
  }

  onSubmit(){
   /*  const body = new FormData();
    body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
    console.log( body );

    this.imageService.createImage(body, this.user._id).subscribe(response => console.log(response)); */
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



}
