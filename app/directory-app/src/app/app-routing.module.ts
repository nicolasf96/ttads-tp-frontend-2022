import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CreateCategoriesComponent } from './components/create-categories/create-categories.component';
import { ListingViewComponent } from './components/listing-view/listing-view.component';
import { LoginComponent } from './components/login/login.component';
import { ModeratorPanelComponent } from './components/moderator-panel/moderator-panel.component';
import { PrincipalViewComponent } from './components/principal-view/principal-view.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { SingupComponent } from './components/singup/singup.component';
import { StoreViewComponent } from './components/store-view/store-view.component';
import { CreateStoreComponent } from './components/create-store/create-store.component';
import { NewStoreComponent } from './components/user-panel/new-store/new-store.component';
import { PanelProductDetailComponent } from './components/user-panel/panel-product-detail/panel-product-detail.component';
import { PanelStoresComponent } from './components/user-panel/panel-stores/panel-stores.component';
import { PerfilComponent } from './components/user-panel/perfil/perfil.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { StoreGuard } from './guards/store.guard';
import { ModeratorGuard } from './guards/moderator.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PanelAuthGuard } from './guards/panel-auth.guard';

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
  { path: 'singup', 
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
  { path: 'listing/:keySearch', 
    component: ListingViewComponent 
  },
  { path: 'search/:keySearch', 
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
    path: 'store-panel/:id',
    component: PanelStoresComponent,
    canActivate: [PanelAuthGuard],
  },
  { path: 'perfil/:id',
    component: PerfilComponent,
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
