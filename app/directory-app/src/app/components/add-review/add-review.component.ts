import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { ReviewsService } from 'src/app/services/reviews.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {



  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private authService: AuthService,
    private storeService: StoresService,
    private reviewService: ReviewsService
    ) { }
   

    userIdentifier: any;
    user:any;
    reviews:any;
    myReview:any;
    storeIdentifier: any;
    reviewForm: any;
    showTempDiv: any;
    showError: any;
        


    identifier:any;
    ngOnInit(): void {

      this.userIdentifier = this.authService.getActualId();
      this.userService.getUser(this.userIdentifier).subscribe( res => this.user = res.data);
      this.route.params.subscribe( (params) => this.storeIdentifier = params['id']);
      this.reviewService.getReviewsByUserAndStore(this.userIdentifier, this.storeIdentifier).subscribe(res => this.myReview = res.data)
      this.crearFormulario();
      
  }

  crearFormulario(){
    this.reviewForm = new FormGroup({
      comment: new FormControl('', [Validators.required]),
      score: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    if(this.reviewForm.valid){
      let rev = this.reviewForm.value
      rev.store = this.storeIdentifier
      rev.user = this. userIdentifier
      this.reviewService.createReview(rev).subscribe( response => console.log(response));
      this.reviewForm.reset();
    }
  }


}
