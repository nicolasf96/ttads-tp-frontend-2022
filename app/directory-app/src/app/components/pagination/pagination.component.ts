import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StoresService } from 'src/app/services/stores/stores.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() data: any;
  @Input() query: any;
  @Input() page: any;


  constructor(
    private service: StoresService,
    private router: Router
    ){
  }

  ngOninit(){
    console.log(this.data);
    if(!this.page){
      this.page = 1
    }
    if(!this.query){
      this.query = ''
    }
  }

  redirectToNext() {
    const nextPage = parseInt(this.page) + 1;
    // const nextPageParam = encodeURIComponent('page=' + nextPage);
    this.router.navigate(['/listing', this.query], { queryParams: { page: nextPage } })
    .then(()=>{
      location.reload()
    });
  }
  

  redirectToPrev(){
    const prevPage = parseInt(this.page) - 1;
    // const prevPageParam = encodeURIComponent('page=' + prevPage);
    this.router.navigate(['/listing', this.query], { queryParams: { page: prevPage } })
    .then(()=>{
      location.reload()
    });
  }

}
