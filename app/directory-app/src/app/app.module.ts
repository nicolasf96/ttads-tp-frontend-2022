import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoresComponent } from './components/stores/stores.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CreateCategoriesComponent } from './components/categories/create-categories/create-categories.component';
import { StoreComponent } from './components/stores/store/store.component'
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { CreateUsersComponent } from './components/users/create-users/create-users.component';
import { EditCategoriesComponent } from './components/categories/edit-categories/edit-categories.component';
import { HomeComponent } from './home/home.component';
import { CreateStoreComponent } from './components/stores/create-store/create-store.component';
import { ProductsOfStoreComponent } from './components/stores/products-of-store/products-of-store.component';
import { ReviewsOfStoreComponent } from './components/stores/reviews-of-store/reviews-of-store.component';
import { StoreDetailsComponent } from './components/stores/store-details/store-details.component';
import { EditUsersComponent } from './components/users/edit-users/edit-users.component';
import { CommonModule } from '@angular/common';
import { PrincipalViewComponent } from './components/principal-view/principal-view.component';
import { ListingViewComponent } from './components/listing-view/listing-view.component';
import { StoreViewComponent } from './components/store-view/store-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';
import { PanelNavComponent } from './components/user-panel/panel-nav/panel-nav.component';
import { PerfilComponent } from './components/user-panel/perfil/perfil.component';
import { PanelStoresComponent } from './components/user-panel/panel-stores/panel-stores.component';
import { AllProductsViewComponent } from './components/all-products-view/all-products-view.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { PanelProductsListComponent } from './components/user-panel/panel-products-list/panel-products-list.component';
import { PanelProductDetailComponent } from './components/user-panel/panel-product-detail/panel-product-detail.component';
import { ImagesOfStoreComponent } from './components/user-panel/images-of-store/images-of-store.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ProductsComponent } from './components/products/products.component';
import { ImagesComponent } from './components/images/images.component';
import { StoresListComponent } from './components/stores-list/stores-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    StoresComponent,
    NavigationComponent,
    SideMenuComponent,
    CreateCategoriesComponent,
    StoreComponent,
    UsersComponent,
    CreateUsersComponent,
    EditCategoriesComponent,
    HomeComponent,
    CreateStoreComponent,
    ProductsOfStoreComponent,
    ReviewsOfStoreComponent,
    StoreDetailsComponent,
    EditUsersComponent,
    PrincipalViewComponent,
    ListingViewComponent,
    StoreViewComponent,
    FooterComponent,
    ProductViewComponent,
    SearcherComponent,
    LoginComponent,
    PanelNavComponent,
    PerfilComponent,
    PanelStoresComponent,
    AllProductsViewComponent,
    UserPanelComponent,
    PanelProductsListComponent,
    PanelProductDetailComponent,
    ImagesOfStoreComponent,
    AddReviewComponent,
    ReviewsComponent,
    ProductsComponent,
    ImagesComponent,
    StoresListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
