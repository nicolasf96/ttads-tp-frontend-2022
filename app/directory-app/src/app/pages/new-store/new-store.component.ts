import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ImagesService } from 'src/app/services/images/images.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { UsersService } from 'src/app/services/users/users.service'

@Component({
  selector: 'app-new-store',
  templateUrl: './new-store.component.html',
  styleUrls: ['./new-store.component.scss']
})
export class NewStoreComponent implements OnInit {


  userIdentifier: any;
  user: any;
  storeForm:any;
  showForm = false;
  fileTmp: any;
  photoSelected: any | ArrayBuffer;
  file: any | File;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private usersService: UsersService,
    private imageService: ImagesService,
    private storeService: StoresService) { }

  ngOnInit(): void {
    this. userIdentifier = this.authService.getActualId()
    this.crearFormulario();
  }


  crearFormulario() {
    this.storeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      telephone: new FormControl('',),
      instagram: new FormControl(''),
      twitter: new FormControl(''),
      facebook: new FormControl(''),
      website: new FormControl('')
    })
  }



  onSubmit(){
    let data:any;
    if (this.storeForm.valid){
      let store = this.storeForm.value;
      store.user = this.userIdentifier;
      this.storeService.createStore(store)
      .subscribe({
        next: (res) => {
          if(this.file){
            this.imageService.createImageProfileStore(res.data._id, this.file).subscribe( res => {
            });
          }
          this.router.navigate(['/store-panel/']);
        },
        error: (e) => {
          alert(e.error.message);
        }
      });

  }
}

  uploadPhoto(){

  }



  showTempDiv() {
    throw new Error('Method not implemented.');
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

