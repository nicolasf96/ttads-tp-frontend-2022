import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoresService } from 'src/app/services/stores/stores.service';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
    reviews: any = [];
    identifier:any;
    reviewForm: FormGroup | any;
    myreview: any;
    newReview = false;
    logueado = false;

    ngOnInit(): void {
      this.userIdentifier = this.authService.getActualId();

      this.reviewService.getReviewsByStore(this.storeID).subscribe({
        next: (res) => { 
          this.reviews = res.data;
          if(this.userIdentifier){
            this.logueado = true;
            this.crearFormulario();
            this.reviewService.getReviewsByUserAndStore(this.userIdentifier,this.storeID)
            .subscribe({
              next: (res) => { 
                this.myreview = res.data;
                this.reviewForm.controls['comment'].setValue(res.data.comment);
                this.reviewForm.controls['score'].setValue(res.data.score);    
              },
              error: (e)=> { console.error(e), this.newReview = true;},
              complete: () => console.info('') 
            })
          }
        },
        error: (e)=> { 
          console.error(e), 
          this.newReview = true;
          if(this.userIdentifier){
            this.logueado = true;
            this.crearFormulario();
          }
        },
        complete: () => console.info('') 
    });
    }
    

  crearFormulario(){
    this.reviewForm = new FormGroup({
      comment: new FormControl('', [Validators.required]),
      score: new FormControl('', [Validators.required])
    })
  }


  onSubmit() {
    if(this.reviewForm.valid){
      if(this.newReview){
        let rev = this.reviewForm.value;
        rev.store = this.storeID;
        rev.user = this.userIdentifier;
        console.log(rev);
        this.reviewService.createReview(rev).subscribe( {
          next: (res) =>{ 
            location.reload()
          },
          error: (e) => {
            alert('Comentario inapropiado');
          }

        });
      }else{
        this.myreview.comment = this.reviewForm.value.comment;
        this.myreview.score = this.reviewForm.value.score;
        this.reviewService.editReview(this.myreview).subscribe( 
          {
            next: (res) =>{ 
              location.reload()
            },
            error: (e) => {
              alert('Comentario inapropiado');
            }
  
          }
        )
      }

      // location.reload();
      this.reviewForm.reset();
    }
  }

}
