import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreateCategoriesComponent } from './components/categories/create-categories/create-categories.component';
import { EditCategoriesComponent } from './components/categories/edit-categories/edit-categories.component';
import { ListingViewComponent } from './components/listing-view/listing-view.component';
import { PrincipalViewComponent } from './components/principal-view/principal-view.component';
import { StoreViewComponent } from './components/store-view/store-view.component';
import { CreateStoreComponent } from './components/stores/create-store/create-store.component';
import { StoreComponent } from './components/stores/store/store.component';
import { StoresComponent } from './components/stores/stores.component';
import { CreateUsersComponent } from './components/users/create-users/create-users.component';
import { EditUsersComponent } from './components/users/edit-users/edit-users.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'stores', component: StoresComponent },
  { path: 'newstore', component: CreateStoreComponent },
  { path: 'categories', component: CategoriesComponent},
  { path: 'categories/:id', component: EditCategoriesComponent},
  { path: 'newcategory', component: CreateCategoriesComponent},
  { path: 'store/:id', component: StoreComponent},
  { path: 'storeDetails/:id/:idUser', component: StoreViewComponent},
  { path: 'storeDetails/:id', component: StoreViewComponent},
  { path: 'search/:keySearch', component: ListingViewComponent},
  { path: 'users/:id', component: EditUsersComponent},
  { path: 'newuser', component: CreateUsersComponent},
  { path: '', component: PrincipalViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
