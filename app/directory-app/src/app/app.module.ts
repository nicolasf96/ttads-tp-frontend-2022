import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreateCategoriesComponent } from './components/create-categories/create-categories.component';
import { EditCategoriesComponent } from './components/edit-categories/edit-categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImagesComponent } from './components/images/images.component';
import { ListingViewComponent } from './pages/listing-view/listing-view.component';
import { LoginComponent } from './pages/login/login.component';
import { ModCategoriesComponent } from './pages/mod-categories/mod-categories.component';
import { ModDashboardComponent } from './pages/mod-dashboard/mod-dashboard.component';
import { ModStoresComponent } from './pages/mod-stores/mod-stores.component';
import { ModUsersComponent } from './pages/mod-users/mod-users.component';
import { ModeratorPanelComponent } from './pages/moderator-panel/moderator-panel.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PrincipalViewComponent } from './pages/principal-view/principal-view.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductsComponent } from './components/products/products.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SingupComponent } from './pages/singup/singup.component';
import { StoreViewComponent } from './pages/store-view/store-view.component';
import { StoresListComponent } from './components/stores-list/stores-list.component';
import { CreateStoreComponent } from './components/create-store/create-store.component';
import { ProductsOfStoreComponent } from './components/products-of-store/products-of-store.component';
import { StoreComponent } from './components/store/store.component';
import { StoresComponent } from './components/stores/stores.component';
import { ImagesOfStoreComponent } from './pages/images-of-store/images-of-store.component';
import { NewStoreComponent } from './pages/new-store/new-store.component';
import { PanelNavComponent } from './components/panel-nav/panel-nav.component';
import { PanelProductDetailComponent } from './pages/panel-product-detail/panel-product-detail.component';
import { PanelProductsListComponent } from './pages/panel-products-list/panel-products-list.component';
import { PanelStoresComponent } from './components/panel-stores/panel-stores.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { UsersComponent } from './components/users/users.component';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';
import { StoreBoxListComponent } from './components/store-box-list/store-box-list.component';
import { ReviewComponent } from './components/review/review.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MiniStoreComponent } from './components/mini-store/mini-store.component';
import { SearchingComponent } from './components/searching/searching.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SpinnerModule } from './components/spinner/spinner.module';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { ImgSliderComponent } from './components/img-slider/img-slider.component';
import { StoreFormComponent } from './pages/store-form/store-form.component';
import { NavigationPanelStoreComponent } from './components/navigation-panel-store/navigation-panel-store.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    StoresComponent,
    NavigationComponent,
    CreateCategoriesComponent,
    StoreComponent,
    UsersComponent,
    CreateUsersComponent,
    EditCategoriesComponent,
    CreateStoreComponent,
    ProductsOfStoreComponent,
    EditUsersComponent,
    PrincipalViewComponent,
    ListingViewComponent,
    StoreViewComponent,
    FooterComponent,
    ProductViewComponent,
    LoginComponent,
    PanelNavComponent,
    ProfileComponent,
    PanelStoresComponent,
    UserPanelComponent,
    PanelProductsListComponent,
    PanelProductDetailComponent,
    ImagesOfStoreComponent,
    ReviewsComponent,
    ProductsComponent,
    ImagesComponent,
    StoresListComponent,
    SingupComponent,
    NewStoreComponent,
    ModeratorPanelComponent,
    ModDashboardComponent,
    ModUsersComponent,
    ModStoresComponent,
    ModCategoriesComponent,
    StoreBoxListComponent,
    ReviewComponent,
    NotFoundComponent,
    MiniStoreComponent,
    SearchingComponent,
    PaginationComponent,
    ImgSliderComponent,
    StoreFormComponent,
    NavigationPanelStoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    SpinnerModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
   
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
