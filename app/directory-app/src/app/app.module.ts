import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
    EditUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
