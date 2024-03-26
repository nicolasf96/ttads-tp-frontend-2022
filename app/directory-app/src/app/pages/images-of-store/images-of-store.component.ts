import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ImagesService } from 'src/app/services/images/images.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-images-of-store',
  templateUrl: './images-of-store.component.html',
  styleUrls: ['./images-of-store.component.scss']
})
export class ImagesOfStoreComponent implements OnInit {

  store:any;
  photoSelected: any | ArrayBuffer;
  file: any | File;
  userIdentifier: any;


  constructor(
    private storeService: StoresService,
    private router: Router,
    private productService: ProductsService,
    private imageService: ImagesService,
    private service: UsersService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.userIdentifier = this.authService.getActualId();
    this.service.getUser(this.userIdentifier).subscribe( res => {
      this.store = res.data.store;
      }
    );
  }

  uploadPhoto(){
    let data:any;
    this.imageService.addImageToStore(this.store._id, this.file).subscribe( res => {
      this.storeService.getStore(this.store._id).subscribe(res=>{
        data=res;
        this.store = data.data.store;
        this.photoSelected = '';
      });
    });
    location.reload()
  }



  deletePhoto(id:any){
    let data;
    this.imageService.deleteImage(id).subscribe(res=>{
      this.storeService.getStore(this.store._id).subscribe(res=>{
        data=res;
        this.store = data.data.store;
      });
    });
    location.reload()
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
