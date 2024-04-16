import { Component, Input } from '@angular/core';
import { ImagesService } from 'src/app/services/images/images.service';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss']
})
export class ImgSliderComponent {

  @Input() imagenes: any;

  actualPath: any;
  index = 0;
  total: any;
  baseURL: any;
  noImageURL: any;

  constructor(
    private imageService: ImagesService
  ){

  }

  ngOnInit():void{
    this.baseURL = this.imageService.getBaseUrl();
    this.noImageURL = this.imageService.getNoImageUrl();
    this.actualPath = this.baseURL + this.imagenes[this.index].path;   
    this.total = this.imagenes.length

  }

  siguiente(){
    this.index += 1
    if(this.index == this.total){
      this.index = 0
    }
    this.actualizarPath(this.index)
  }

  actualizarPath(index:any){
    this.actualPath = this.baseURL + this.imagenes[index].path;
  }

  anterior(){
    this.index -= 1
    if(this.index == -1){
      this.index = this.total -1
    }
    this.actualizarPath(this.index)
  }

  imageError(){
    this.actualPath = this.noImageURL
  }


}
