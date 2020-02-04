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
      {path: 'accounts', component: AccountListComponent},
      {path: 'account/edit/:id', component: AccountEditComponent},
      {path: 'account/remove/:id', component: AccountRemoveComponent},
      {path: 'account/preview/:id', component: AccountPreviewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
