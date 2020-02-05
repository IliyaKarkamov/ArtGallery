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
import {AccountRemoveComponent} from './components/admin/account/account-remove/account-remove.component';
import {AccountPreviewComponent} from './components/admin/account/account-preview/account-preview.component';
import {StylesListComponent} from './components/admin/styles/styles-list/styles-list.component';
import {StylesPreviewComponent} from './components/admin/styles/styles-preview/styles-preview.component';
import {StylesAddComponent} from './components/admin/styles/styles-add/styles-add.component';
import {StylesEditComponent} from './components/admin/styles/styles-edit/styles-edit.component';
import {StylesRemoveComponent} from './components/admin/styles/styles-remove/styles-remove.component';

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
      {path: 'accounts/remove/:id', component: AccountRemoveComponent},
      {path: 'accounts/preview/:id', component: AccountPreviewComponent},

      // Styles routes
      {path: 'styles', component: StylesListComponent},
      {path: 'styles/add', component: StylesAddComponent},
      {path: 'styles/edit/:id', component: StylesEditComponent},
      {path: 'styles/remove/:id', component: StylesRemoveComponent},
      {path: 'styles/preview/:id', component: StylesPreviewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
