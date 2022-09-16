import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreateCategoriesComponent } from './components/categories/create-categories/create-categories.component';
import { EditCategoriesComponent } from './components/categories/edit-categories/edit-categories.component';
import { ListingViewComponent } from './components/listing-view/listing-view.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalViewComponent } from './components/principal-view/principal-view.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { StoreViewComponent } from './components/store-view/store-view.component';
import { CreateStoreComponent } from './components/stores/create-store/create-store.component';
import { StoreComponent } from './components/stores/store/store.component';
import { StoresComponent } from './components/stores/stores.component';
import { CreateUsersComponent } from './components/users/create-users/create-users.component';
import { EditUsersComponent } from './components/users/edit-users/edit-users.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { PanelStoresComponent } from './components/user-panel/panel-stores/panel-stores.component';
import { PerfilComponent } from './components/user-panel/perfil/perfil.component';

const routes: Routes = [
  { path: 'stores', component: StoresComponent, canActivate: [AuthGuard] },
  { path: 'newstore', component: CreateStoreComponent },
  { path: 'categories', component: CategoriesComponent},
  { path: 'categories/:id', component: EditCategoriesComponent},
  { path: 'newcategory', component: CreateCategoriesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'store/:id', component: StoreComponent},
  { path: 'storeDetails/:id/:idUser', component: StoreViewComponent},
  { path: 'storeDetails/:id', component: StoreViewComponent},
  { path: 'listingview', component:  ListingViewComponent},
  { path: 'search/:keySearch', component: ListingViewComponent},
  { path: 'product/:id', component: ProductViewComponent},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'user-panel/:id', component: UserPanelComponent, canActivate: [AuthGuard]},
  { path: 'store-panel/:id', component: PanelStoresComponent, canActivate: [AuthGuard]},
  { path: 'perfil/:id', component: PerfilComponent, canActivate: [AuthGuard]},
  { path: 'user-panel', component: UserPanelComponent, canActivate: [AuthGuard]},
  { path: 'users/:id', component: EditUsersComponent},
  { path: 'newuser', component: CreateUsersComponent},
  { path: '', component: PrincipalViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
