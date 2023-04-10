import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images/images.service';
import { UsersService } from 'src/app/services/users/users.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss'],
})
export class EditUsersComponent implements OnInit {
  @Input() identifier = '';

  user: any;
  fileTmp: any;
  photoSelected: any | ArrayBuffer;
  file: any | File;
  userForm: any;
  showDiv = false;
  showForm = false;

  constructor(
    private userService: UsersService,
    private imageService: ImagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params) => (this.identifier = params['id']));
    this.userService.getUser(this.identifier).subscribe((response) => {
      this.user = response.data;
      this.crearFormulario();
    });
  }

  crearFormulario() {
    this.userForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, [Validators.required]),
      lastName: new FormControl(this.user.lastName, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required]),
      username: new FormControl(this.user.username, [Validators.required]),
      phone: new FormControl(this.user.phone, [Validators.required]),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.userService.getUser(this.identifier).subscribe((response) => {
      this.user = response.data;
      this.crearFormulario();
    });
  }

  loadUser() {
    this.userService.getUser(this.identifier).subscribe((response) => {
      this.user = response.data;
    });
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

  uploadPhoto() {
    let data: any;
    this.imageService.deleteImage(this.user.profilePicture._id);
    this.imageService
      .createImageProfileUser(this.user._id, this.file)
      .subscribe((res) => {
        data = res;
        this.user = data.data.user;
      });
    this.showTempDiv();
    this.showForm = false;
  }

  onSubmit() {
    let data: any;
    this.userService
      .editUser(this.identifier, this.userForm.value)
      .subscribe((res) => {
        data = res;
        this.user = data.data.user;
      });
    this.showTempDiv();
  }

  showTempDiv() {
    this.showDiv = true;
    setTimeout(() => {
      this.showDiv = false;
    }, 3500); // Mostrar durante 3 segundos (3000 milisegundos)
  }

  showPhotoForm() {
    this.showForm = !this.showForm;
  }
}
