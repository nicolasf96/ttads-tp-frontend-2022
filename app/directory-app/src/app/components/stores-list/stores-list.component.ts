import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images/images.service';

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.scss']
})
export class StoresListComponent implements OnInit {


  @Input() stores:any;
  baseURL: any;

  constructor(
    private router: Router,
    private imageService: ImagesService
    ) { }

  ngOnInit(): void {
    this.baseURL = this.imageService.getBaseUrl()
  }

  goToStore(id:any){
    this.router.navigate(['store/'+id]);
  }

}
