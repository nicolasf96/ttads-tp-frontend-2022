import { Component, Input } from '@angular/core';
import { ImagesService } from 'src/app/services/images/images.service';
import { ReviewsService } from 'src/app/services/reviews/reviews.service';

@Component({
  selector: 'app-mini-store',
  templateUrl: './mini-store.component.html',
  styleUrls: ['./mini-store.component.scss']
})
export class MiniStoreComponent {

  @Input() store: any;
  averageScore: any;
  baseURL: any;
  noImageURL: any;
  path: any;

  constructor(private reviewService: ReviewsService,
    private imageService: ImagesService){    
  }

  ngOnInit(): void {
    this.baseURL = this.imageService.getBaseUrl()
    this.noImageURL = this.imageService.getNoImageUrl()
    this.path = this.baseURL + this.store.profilePicture?.path;
    this.reviewService.getReviewsByStore(this.store._id)
    .subscribe({
      next: (response) => {
        this.calculateAverageScore(response.data)
      },
      error: (e) => {
        // console.log(e);
      }
    });
  }


  calculateAverageScore(reviews:any) {
    let totalScore = 0;
    let averageScore;
    for (let review of reviews) {
      totalScore += review.score;
    }
    if (reviews.length > 0) {
      averageScore = totalScore / reviews.length;
      this.averageScore = averageScore;
    }
    
  }

  imagenCargada(){

  }
  imagenError(){
    this.path = this.noImageURL
  }
}
