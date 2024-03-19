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
import { ListingViewComponent } from './components/listing-view/listing-view.component';
import { LoginComponent } from './components/login/login.component';
import { ModCategoriesComponent } from './components/mod-categories/mod-categories.component';
import { ModDashboardComponent } from './components/mod-dashboard/mod-dashboard.component';
import { ModStoresComponent } from './components/mod-stores/mod-stores.component';
import { ModUsersComponent } from './components/mod-users/mod-users.component';
import { ModeratorPanelComponent } from './components/moderator-panel/moderator-panel.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PrincipalViewComponent } from './components/principal-view/principal-view.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductsComponent } from './components/products/products.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SingupComponent } from './components/singup/singup.component';
import { StoreViewComponent } from './components/store-view/store-view.component';
import { StoresListComponent } from './components/stores-list/stores-list.component';
import { CreateStoreComponent } from './components/create-store/create-store.component';
import { ProductsOfStoreComponent } from './components/products-of-store/products-of-store.component';
import { StoreComponent } from './components/store/store.component';
import { StoresComponent } from './components/stores/stores.component';
import { ImagesOfStoreComponent } from './components/user-panel/images-of-store/images-of-store.component';
import { NewStoreComponent } from './components/user-panel/new-store/new-store.component';
import { PanelNavComponent } from './components/user-panel/panel-nav/panel-nav.component';
import { PanelProductDetailComponent } from './components/user-panel/panel-product-detail/panel-product-detail.component';
import { PanelProductsListComponent } from './components/user-panel/panel-products-list/panel-products-list.component';
import { PanelStoresComponent } from './components/user-panel/panel-stores/panel-stores.component';
import { PerfilComponent } from './components/user-panel/perfil/perfil.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { UsersComponent } from './components/users/users.component';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';
import { StoreBoxListComponent } from './components/store-box-list/store-box-list.component';
import { ReviewComponent } from './components/review/review.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MiniStoreComponent } from './components/mini-store/mini-store.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SpinnerModule } from './components/spinner/spinner.module';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';

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
    PerfilComponent,
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
    BusquedaComponent,
    PaginationComponent,
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
