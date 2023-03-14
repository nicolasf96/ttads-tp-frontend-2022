import { Component, Input, OnInit } from '@angular/core';
import { OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { UsersService } from 'src/app/services/users/users.service';
import { ImagesService } from 'src/app/services/images/images.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-panel-stores',
  templateUrl: './panel-stores.component.html',
  styleUrls: ['./panel-stores.component.scss']
})
export class PanelStoresComponent implements OnInit, OnChanges {

  
    constructor(private route: ActivatedRoute,
      private service: UsersService,
      private imageService: ImagesService,
      private categoryService: CategoriesService,
      private router: Router,
      private storesService: StoresService,
      private cdRef: ChangeDetectorRef) { }
     


      chart: any;
      userIdentifier: any;
      categories: any;
      user:any;
      store: any;
      products: any;
      storeForm: any;
      catForm: any;
      showPanel: any;
      showFormBanner: any;
      showDiv= false;
      showForm = false;
      errorToggle = false;
      fileTmp: any;
      photoSelected: any | ArrayBuffer;
      file: any | File;

      photoSelected2: any | ArrayBuffer;
      file2: any | File;
/*       fileInput = document.querySelector('.file-input');
      fileNameLabel = document.querySelector('#file-name-label'); */
      selectedOption: any;
      showCatToggle = false;


      identifier:any;
      ngOnInit(): void {
        this.route.params.subscribe( (params) => this.userIdentifier = params['id']);
        this.service.getUser(this.userIdentifier).subscribe( res => {
          this.user = res.data;
          this.store = res.data.store;
          console.log(res.data)
          if(res.data.store){
            this.showPanel = true;
          }else{
            this.showPanel = false;
          }
          this.selectedOption = res.data.category;
          this.crearFormulario();
          this.crearFormularioCat();
          }
        );
        this.categoryService.getCategories().subscribe( res => this.categories = res.data );
        this.loadProducts();
      }

    ngOnChanges(changes: SimpleChanges) {
      this.cdRef.detectChanges();

    }

    loadProducts(){
      this.storesService.getProductsByStoreId(this.store._id).subscribe( response => this.products = response.data)
    }

    goToStore(id:any){
      this.router.navigate(['storeDetails/'+id]);
    }

    crearFormulario() {
      this.storeForm = new FormGroup({
        name: new FormControl(this.store.name, [Validators.required]),
        username: new FormControl(this.store.username, [Validators.required]),
        description: new FormControl(this.store.description, [Validators.required]),
        address: new FormControl(this.store.address, [Validators.required]),
        city: new FormControl(this.store.city, [Validators.required]),
        telephone: new FormControl(this.store.telephone, [Validators.required]),
        instagram: new FormControl(this.store.instagram),
        twitter: new FormControl(this.store.twitter),
        facebook: new FormControl(this.store.facebook),
        website: new FormControl(this.store.website)
      })
    }

    crearFormularioCat() {
      this.catForm = new FormGroup({
        category: new FormControl('Hola')
      })
    }

    onSubmit() {
      if (this.storeForm.valid){
        this.storesService.editStore(this.storeForm.value, this.store._id).subscribe( response => console.log(response));
        this.showTempDiv();
      }else{
        this.showError();
      }
    }

    onSubmitCat() {
      /* const selectedValue = this.catForm.get('category').value;
      console.log('Valor seleccionado:', selectedValue); */
      this.storesService.editStore(this.catForm.value, this.store._id).subscribe( response => console.log(response));
      this.showTempDiv();
      this.showCat();
      
    }

    deleteBanner() {
      this.imageService.deleteImage(this.store.banner._id).subscribe( response => console.log(response));
      this.showTempDiv();
      this.storesService.getStore(this.store._id).subscribe( res => this.store = res.data );      
    }
  
  
    initialize() {
      this.storeForm.reset()
    }  

    showTempDiv() {
      this.showDiv = true;
      setTimeout(() => {
        this.showDiv = false;
      }, 5000); // Mostrar durante 3 segundos (3000 milisegundos)
    }
    
    showError(){
      this.errorToggle = !this.errorToggle;
      setTimeout(() => {
        this.errorToggle = false;
      }, 5000); // Mostrar durante 3 segundos (3000 milisegundos)

    }

    uploadPhoto(){
      if(this.user.store.profilePicture){
        this.imageService.deleteImage(this.user.store.profilePicture._id);
      }
      this.imageService.createImageProfileStore(this.store._id, this.file).subscribe( response => console.log(response));
      this.showTempDiv();
      this.showForm = false;
    }

    uploadBannerPhoto(){
      if(this.store.banner){
        this.imageService.deleteImage(this.user.store.banner._id);
      }
      this.imageService.createBanner(this.store._id, this.file2).subscribe( response => console.log(response));
      this.showTempDiv();
      this.showForm = false;
      this.storesService.getStore(this.store._id).subscribe( res => this.store = res.data );      
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

    onPhotoSelected2($event: any){
      if ($event.target.files && $event.target.files[0]) {
        this.file2 = <File>$event.target.files[0];
        // image preview
        const reader = new FileReader();
        reader.onload = e => this.photoSelected2 = reader.result;
        reader.readAsDataURL(this.file2);
      }
    }

    showPhotoForm(){
      this.showForm = !this.showForm;
    }

    showBannerForm(){
      this.showFormBanner = !this.showFormBanner;
    }
    
    onSelect(){
    }

    showCat(){
      this.showCatToggle = !this.showCatToggle;
    }

    



  crearGrafico() {
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
          label: 'Porcentaje de reviews',
          data: [10, 20, 30, 25, 15],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
  }
  

}