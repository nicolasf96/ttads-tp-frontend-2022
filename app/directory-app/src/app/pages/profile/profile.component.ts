import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/services/images/images.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input()
  user: any;
  userIdentifier: any;

  constructor(
    private route: ActivatedRoute,
    private service: UsersService,
    private imageService: ImagesService
  ) {}

  error: any;
  toggle = true;
  userForm: any;
  showDiv = false;
  showForm = false;
  fileTmp: any;
  photoSelected: any | ArrayBuffer;
  file: any | File;
  fileInput = document.querySelector('.file-input');
  fileNameLabel = document.querySelector('#file-name-label');
  baseURL: any;
  noImageURL: any;

  ngOnInit(): void {
    this.baseURL = this.imageService.getBaseUrl();
    this.noImageURL = this.imageService.getNoImageUrl();
    this.route.params.subscribe(
      (params) => (this.userIdentifier = params['id'])
    );
    this.service.getUser(this.userIdentifier).subscribe((res) => {
      this.user = res.data;
      this.crearFormulario();
    });
  }

  crearFormulario() {
    this.userForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, [Validators.required]),
      lastName: new FormControl(this.user.lastName, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required]),
      username: new FormControl(this.user.username, [Validators.required]),
      password: new FormControl(this.user.password, [Validators.required]),
      phone: new FormControl(this.user.phone, [Validators.required]),
    });
  }

  onSubmit() {
    let data: any;
    this.service.editUser(this.userIdentifier, this.userForm.value)
      .subscribe({
        next: (res) => {
          data = res;
          this.user = data.data.user;
          alert('Datos guardados exitosamente')
        },
        error: (e) => {
          this.error = e.error.message;
          this.toggle = false;
        },
      });
    
  }

  showTempDiv() {
    this.showDiv = true;
    setTimeout(() => {
      this.showDiv = false;
    }, 5000); // Mostrar durante 3 segundos (3000 milisegundos)
  }

  uploadPhoto() {
    let data: any;
    this.imageService
      .createImageProfileUser(this.user._id, this.file)
      .subscribe((res) => {
        data = res;
        this.user = data.data.user;
      });
    this.showTempDiv();
    this.showForm = false;
  }

  onPhotoSelected($event: any) {
    if ($event.target.files && $event.target.files[0]) {
      this.file = <File>$event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = (e) => (this.photoSelected = reader.result);
      reader.readAsDataURL(this.file);
    }
  }

  showPhotoForm() {
    this.showForm = !this.showForm;
  }
  
  imageError(event: any){
    event.target.src = this.noImageURL
  }
}
