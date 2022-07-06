import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreateCategoriesComponent } from './components/categories/create-categories/create-categories.component';
import { StoreComponent } from './components/stores/store/store.component';
import { StoresComponent } from './components/stores/stores.component';
import { CreateUsersComponent } from './components/users/create-users/create-users.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'stores', component: StoresComponent },
  { path: 'categories', component: CategoriesComponent},
  { path: 'newcategory', component: CreateCategoriesComponent},
  { path: 'store', component: StoreComponent},
  { path: 'users', component: UsersComponent},
  { path: 'newuser', component: CreateUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
