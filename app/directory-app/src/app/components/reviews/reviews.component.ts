import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { ReviewsService } from 'src/app/services/reviews.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private authService: AuthService,
    private storeService: StoresService,
    private reviewService: ReviewsService
    ) { }
   
    @Input() storeID: any;
    userIdentifier: any;
    user:any;
    reviews:any;
    storeIdentifier: any;
    identifier:any;
    
    ngOnInit(): void {
      this.userIdentifier = this.authService.getActualId();
      if(this.userIdentifier){
        this.userService.getUser(this.userIdentifier).subscribe( res => this.user = res.data);
      }
      // this.route.params.subscribe( (params) => this.storeIdentifier = params['id']);
      this.reviewService.getReviewsByStore(this.storeID).subscribe(res => this.reviews = res.data)
      
  }

}
