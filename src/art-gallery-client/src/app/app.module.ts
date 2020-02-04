import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {FlexLayoutModule} from '@angular/flex-layout';
import {JwtModule} from '@auth0/angular-jwt';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule, MatListModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

// Site components
import {SiteLayoutComponent} from './components/site/_layout/site-layout/site-layout.component';
import {HomeComponent as SiteHomeComponent} from './components/site/home/home.component';
import {AccountSignUpComponent} from './components/site/account/account-sign-up/account-sign-up.component';
import {AccountSignInComponent} from './components/site/account/account-sign-in/account-sign-in.component';
import {AccountSignOutComponent} from './components/site/account/account-sign-out/account-sign-out.component';

// Admin components
import {AdminLayoutComponent} from './components/admin/_layout/admin-layout/admin-layout.component';
import {AdminHeaderComponent} from './components/admin/_layout/admin-header/admin-header.component';
import {AdminSideComponent} from './components/admin/_layout/admin-side/admin-side.component';
import {AdminContentComponent} from './components/admin/_layout/admin-content/admin-content.component';
import {AdminFooterComponent} from './components/admin/_layout/admin-footer/admin-footer.component';
import {HomeComponent as AdminHomeComponent} from './components/admin/home/home.component';
import {AccountListComponent} from './components/admin/account/account-list/account-list.component';
import {AccountRemoveComponent} from './components/admin/account/account-remove/account-remove.component';
import {AccountEditComponent} from './components/admin/account/account-edit/account-edit.component';
import { AccountPreviewComponent } from './components/admin/account/account-preview/account-preview.component';

export function getJwtToken() {
  return localStorage.getItem('jwtToken');
}

@NgModule({
  declarations: [
    AppComponent,

    // Site components
    SiteLayoutComponent,
    SiteHomeComponent,
    AccountSignUpComponent,
    AccountSignInComponent,
    AccountSignOutComponent,

    // Admin components
    AdminLayoutComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    AdminSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AccountListComponent,
    AccountRemoveComponent,
    AccountEditComponent,
    AccountPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    FlexLayoutModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getJwtToken,
        whitelistedDomains: ['localhost:4200']
      }
    }),

    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
