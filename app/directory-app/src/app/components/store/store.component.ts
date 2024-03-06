import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ImagesService } from 'src/app/services/images/images.service';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  constructor(
    private service: StoresService,
    private imageService: ImagesService,
    private catService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  currentPanel = 'products';
  @Input() store: any;
  categories: any = [];
  fileTmp: any;
  photoSelected: any | ArrayBuffer;
  file: any | File;
  storeForm: any;

  showDiv = false;
  showForm = false;
  errorToggle = false;

  ngOnInit() {
    this.catService
      .getCategories()
      .subscribe((response) => (this.categories = response.data));
    this.crearFormulario();
  }

  ngOnChanges() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.storeForm = new FormGroup({
      name: new FormControl(this.store.name, [Validators.required]),
      username: new FormControl(this.store.username, [Validators.required]),
      description: new FormControl(this.store.description, [
        Validators.required,
      ]),
      address: new FormControl(this.store.address, [Validators.required]),
      city: new FormControl(this.store.city, [Validators.required]),
      telephone: new FormControl(this.store.telephone, [Validators.required]),
      instagram: new FormControl(this.store.instagram),
      twitter: new FormControl(this.store.twitter),
      facebook: new FormControl(this.store.facebook),
      website: new FormControl(this.store.website),
      blocked: new FormControl(this.store.blocked === true),
    });
  }

  onSubmit() {
    let data;
    if (this.storeForm.valid) {
      this.service
        .editStore(this.storeForm.value, this.store._id)
        .subscribe((response) => {
          data = response;
          this.store = data.data;
        });
      this.showTempDiv();
      window.location.reload()
    } else {
      alert('Error al editar tienda')
      this.showError();
    }
  }

  initialize() {
    this.storeForm.reset();
  }

  showTempDiv() {
    this.showDiv = true;
    setTimeout(() => {
      this.showDiv = false;
    }, 5000); // Mostrar durante 3 segundos (3000 milisegundos)
  }

  showError() {
    this.errorToggle = !this.errorToggle;
    setTimeout(() => {
      this.errorToggle = false;
    }, 5000); // Mostrar durante 3 segundos (3000 milisegundos)
  }

  goToStore(id: any) {
    this.router.navigate(['store/' + id]);
  }

  deleteStore(){
    this.service.deleteStore(this.store._id)
    .subscribe({
      next: (res) => {
        alert('Tienda borrada exitosamente')
        window.location.reload();
      },
      error: (e) => {
        alert(e.error.message);
      },
    });
  }

}
