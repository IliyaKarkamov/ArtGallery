import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NoAuthGuard} from './guards/account/no-auth.guard';
import {AuthGuard} from './guards/account/auth.guard';

// Site components
import {SiteLayoutComponent} from './components/site/_layout/site-layout/site-layout.component';
import {HomeComponent as SiteHomeComponent} from './components/site/home/home.component';
import {AccountSignUpComponent} from './components/site/account/account-sign-up/account-sign-up.component';
import {AccountSignInComponent} from './components/site/account/account-sign-in/account-sign-in.component';
import {AccountSignOutComponent} from './components/site/account/account-sign-out/account-sign-out.component';

// Admin components
import {AdminLayoutComponent} from './components/admin/_layout/admin-layout/admin-layout.component';
import {HomeComponent as AdminHomeComponent} from './components/site/home/home.component';
import {AccountListComponent} from './components/admin/account/account-list/account-list.component';
import {AccountEditComponent} from './components/admin/account/account-edit/account-edit.component';
import {AccountPreviewComponent} from './components/admin/account/account-preview/account-preview.component';
import {AccountActivationComponent} from './components/admin/account/account-activation/account-activation.component';
import {StylesListComponent} from './components/admin/styles/styles-list/styles-list.component';
import {StylesPreviewComponent} from './components/admin/styles/styles-preview/styles-preview.component';
import {StylesAddComponent} from './components/admin/styles/styles-add/styles-add.component';
import {StylesEditComponent} from './components/admin/styles/styles-edit/styles-edit.component';
import {StylesActivationComponent} from './components/admin/styles/styles-activation/styles-activation.component';
import {ErasListComponent} from './components/admin/eras/eras-list/eras-list.component';
import {ErasAddComponent} from './components/admin/eras/eras-add/eras-add.component';
import {ErasEditComponent} from './components/admin/eras/eras-edit/eras-edit.component';
import {ErasActivationComponent} from './components/admin/eras/eras-activation/eras-activation.component';
import {ErasPreviewComponent} from './components/admin/eras/eras-preview/eras-preview.component';
import {ArtistsListComponent} from './components/admin/artists/artists-list/artists-list.component';
import {ArtistsAddComponent} from './components/admin/artists/artists-add/artists-add.component';
import {ArtistsEditComponent} from './components/admin/artists/artists-edit/artists-edit.component';
import {ArtistsActivationComponent} from './components/admin/artists/artists-activation/artists-activation.component';
import {ArtistsPreviewComponent} from './components/admin/artists/artists-preview/artists-preview.component';

const routes: Routes = [
  // Site routes
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {path: '', component: SiteHomeComponent, pathMatch: 'full'},
      {path: 'account/signup', component: AccountSignUpComponent, canActivate: [NoAuthGuard]},
      {path: 'account/signin', component: AccountSignInComponent, canActivate: [NoAuthGuard]},
      {path: 'account/signout', component: AccountSignOutComponent, canActivate: [AuthGuard]}
    ]
  },

  // Admin routes
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: AdminHomeComponent, pathMatch: 'full'},
      // Account routes
      {path: 'accounts', component: AccountListComponent},
      {path: 'accounts/edit/:id', component: AccountEditComponent},
      {path: 'accounts/activation/:id', component: AccountActivationComponent},
      {path: 'accounts/preview/:id', component: AccountPreviewComponent},

      // Styles routes
      {path: 'styles', component: StylesListComponent},
      {path: 'styles/add', component: StylesAddComponent},
      {path: 'styles/edit/:id', component: StylesEditComponent},
      {path: 'styles/activation/:id', component: StylesActivationComponent},
      {path: 'styles/preview/:id', component: StylesPreviewComponent},

      // Eras routes
      {path: 'eras', component: ErasListComponent},
      {path: 'eras/add', component: ErasAddComponent},
      {path: 'eras/edit/:id', component: ErasEditComponent},
      {path: 'eras/activation/:id', component: ErasActivationComponent},
      {path: 'eras/preview/:id', component: ErasPreviewComponent},

      // Artists routes
      {path: 'artists', component: ArtistsListComponent},
      {path: 'artists/add', component: ArtistsAddComponent},
      {path: 'artists/edit/:id', component: ArtistsEditComponent},
      {path: 'artists/activation/:id', component: ArtistsActivationComponent},
      {path: 'artists/preview/:id', component: ArtistsPreviewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
