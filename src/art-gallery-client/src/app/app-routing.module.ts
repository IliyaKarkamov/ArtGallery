import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AccountSignUpComponent} from './components/account/account-sign-up/account-sign-up.component';
import {AccountSignInComponent} from './components/account/account-sign-in/account-sign-in.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account/signin',
    pathMatch: 'full'
  },
  {
    path: 'account/signup',
    component: AccountSignUpComponent
  },
  {
    path: 'account/signin',
    component: AccountSignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
