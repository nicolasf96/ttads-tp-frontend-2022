import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { UsersService } from '../../services/users/users.service';
import { Subscription} from 'rxjs';
import { ImagesService } from 'src/app/services/images/images.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Output()
  styleMode = new EventEmitter<boolean>();

  private userLoggedInSubscription: Subscription = new Subscription;

  constructor(
    public authService: AuthService
    ,private userService: UsersService,
    private imageService: ImagesService
    ) {}
  
  identifier: any;
  user: any;
  baseURL: any;
  noImageURL: any;

  ngOnInit(): void {
    this.baseURL = this.imageService.getBaseUrl();
    this.noImageURL = this.imageService.getNoImageUrl();

    this.userLoggedInSubscription = this.authService.userLoggedIn$.subscribe(() => {
      // Vuelve a cargar los datos necesarios
      this.loadData();
    });

    this.loadData();
  }



  loadData(){
    this.user = null;
    this.identifier = this.authService.getActualId()
      if (this.identifier) {
        this.userService.getUser(this.identifier).subscribe(user => {
          // console.log('USER',user.data)
          this.user = user.data;
        });
      }
    
  }

  ngOnDestroy(): void {
    this.userLoggedInSubscription.unsubscribe();
  }

  imageError(event: any){
    event.target.src = this.noImageURL
  }

}
