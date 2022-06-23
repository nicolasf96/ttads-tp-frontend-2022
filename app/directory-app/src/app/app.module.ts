import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoresComponent } from './components/stores/stores.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component'

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    StoresComponent,
    NavigationComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
