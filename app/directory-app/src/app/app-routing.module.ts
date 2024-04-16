import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CreateCategoriesComponent } from './components/create-categories/create-categories.component';
import { ListingViewComponent } from './pages/listing-view/listing-view.component';
import { LoginComponent } from './pages/login/login.component';
import { ModeratorPanelComponent } from './pages/moderator-panel/moderator-panel.component';
import { PrincipalViewComponent } from './pages/principal-view/principal-view.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { SingupComponent } from './pages/singup/singup.component';
import { StoreViewComponent } from './pages/store-view/store-view.component';
import { CreateStoreComponent } from './components/create-store/create-store.component';
import { NewStoreComponent } from './pages/new-store/new-store.component';
import { PanelProductDetailComponent } from './pages/panel-product-detail/panel-product-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { StoreGuard } from './guards/store.guard';
import { ModeratorGuard } from './guards/moderator.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PanelAuthGuard } from './guards/panel-auth.guard';
import { StoreFormComponent } from './pages/store-form/store-form.component';
import { ImagesOfStoreComponent } from './pages/images-of-store/images-of-store.component';
import { PanelProductsListComponent } from './pages/panel-products-list/panel-products-list.component';

const routes: Routes = [
  { path: 'newstore', 
    component: CreateStoreComponent ,
    canActivate: [AuthGuard],
  },
  { path: 'newcategory', 
    component: CreateCategoriesComponent,
    canActivate: [AuthGuard], 
  },
  { path: 'login', 
    component: LoginComponent ,
    canActivate: [NotAuthGuard],
  },
  { path: 'signup', 
    component: SingupComponent,
    canActivate: [NotAuthGuard],
  },
  { path: 'store/:id/:idUser', 
    component: StoreViewComponent 
  },
  { path: 'store/:id', 
    component: StoreViewComponent 
  },
  { path: 'listing', 
    component: ListingViewComponent 
  },
  { path: 'listing/:query', 
    component: ListingViewComponent 
  },
  { path: 'product/:id',
    component: ProductViewComponent 
  },
  { path: 'product-details/:id',
    component: PanelProductDetailComponent
  },
  {
    path: 'user-panel/:id',
    component: UserPanelComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'store-panel',
    component: StoreFormComponent,
    canActivate: [PanelAuthGuard],
  },
  {
    path: 'store-panel/imagenes',
    component: ImagesOfStoreComponent,
    canActivate: [PanelAuthGuard],
  },
  {
    path: 'store-panel/productos',
    component: PanelProductsListComponent,
    canActivate: [PanelAuthGuard],
  },
  { path: 'perfil/:id',
    component: ProfileComponent,
    canActivate: [PanelAuthGuard]
  },
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
  { path: 'users/:id',
    component: EditUsersComponent,
    canActivate: [AuthGuard], 
  },
  { path: 'newuser',
    component: CreateUsersComponent,
    canActivate: [AuthGuard], 
  },
  { 
    path: 'moderator/:panel',
    component: ModeratorPanelComponent,
    canActivate: [ModeratorGuard]
   },
  { path: '', 
    component: PrincipalViewComponent 
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
