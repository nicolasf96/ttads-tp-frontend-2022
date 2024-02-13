import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateCategoriesComponent } from './components/categories/create-categories/create-categories.component';
import { ListingViewComponent } from './components/listing-view/listing-view.component';
import { LoginComponent } from './components/login/login.component';
import { ModeratorPanelComponent } from './components/moderator-panel/moderator-panel.component';
import { PrincipalViewComponent } from './components/principal-view/principal-view.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { SingupComponent } from './components/singup/singup.component';
import { StoreViewComponent } from './components/store-view/store-view.component';
import { CreateStoreComponent } from './components/stores/create-store/create-store.component';
import { NewStoreComponent } from './components/user-panel/new-store/new-store.component';
import { PanelProductDetailComponent } from './components/user-panel/panel-product-detail/panel-product-detail.component';
import { PanelStoresComponent } from './components/user-panel/panel-stores/panel-stores.component';
import { PerfilComponent } from './components/user-panel/perfil/perfil.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { CreateUsersComponent } from './components/users/create-users/create-users.component';
import { EditUsersComponent } from './components/users/edit-users/edit-users.component';
import { StoreGuard } from './store.guard';
import { ModeratorGuard } from './moderator.guard';

const routes: Routes = [
  { path: 'newstore', component: CreateStoreComponent },
  { path: 'newcategory', component: CreateCategoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'storeDetails/:id/:idUser', component: StoreViewComponent },
  { path: 'storeDetails/:id', component: StoreViewComponent },
  { path: 'listing', component: ListingViewComponent },
  { path: 'listing/:keySearch', component: ListingViewComponent },
  { path: 'search/:keySearch', component: ListingViewComponent },
  { path: 'product/:id', component: ProductViewComponent },
  { path: 'product-details/:id', component: PanelProductDetailComponent },
  {
    path: 'user-panel/:id',
    component: UserPanelComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'store-panel/:id',
    component: PanelStoresComponent,
    canActivate: [AuthGuard],
  },
  { path: 'perfil/:id', component: PerfilComponent, canActivate: [AuthGuard] },
  {
    path: 'user-panel',
    component: UserPanelComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-store',
    component: NewStoreComponent,
    canActivate: [StoreGuard],
  },
  { path: 'users/:id', component: EditUsersComponent },
  { path: 'newuser', component: CreateUsersComponent },
  { 
    path: 'moderator/:panel',
    component: ModeratorPanelComponent,
    canActivate: [ModeratorGuard]
   },
  { path: '', component: PrincipalViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
