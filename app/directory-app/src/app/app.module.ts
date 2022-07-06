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
    EditCategoriesComponent
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
