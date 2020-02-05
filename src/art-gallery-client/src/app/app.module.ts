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
import {
  MatCardModule,
  MatCheckboxModule, MatDatepickerModule,
  MatListModule, MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
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
import {AccountEditComponent} from './components/admin/account/account-edit/account-edit.component';
import {AccountActivationComponent} from './components/admin/account/account-activation/account-activation.component';
import {AccountPreviewComponent} from './components/admin/account/account-preview/account-preview.component';
import {StylesPreviewComponent} from './components/admin/styles/styles-preview/styles-preview.component';
import {StylesListComponent} from './components/admin/styles/styles-list/styles-list.component';
import {StylesEditComponent} from './components/admin/styles/styles-edit/styles-edit.component';
import {StylesAddComponent} from './components/admin/styles/styles-add/styles-add.component';
import {StylesActivationComponent} from './components/admin/styles/styles-activation/styles-activation.component';
import {ErasListComponent} from './components/admin/eras/eras-list/eras-list.component';
import {ErasAddComponent} from './components/admin/eras/eras-add/eras-add.component';
import {ErasPreviewComponent} from './components/admin/eras/eras-preview/eras-preview.component';
import {ErasEditComponent} from './components/admin/eras/eras-edit/eras-edit.component';
import {ErasActivationComponent} from './components/admin/eras/eras-activation/eras-activation.component';
import {ArtistsActivationComponent} from './components/admin/artists/artists-activation/artists-activation.component';
import {ArtistsAddComponent} from './components/admin/artists/artists-add/artists-add.component';
import {ArtistsListComponent} from './components/admin/artists/artists-list/artists-list.component';
import {ArtistsPreviewComponent} from './components/admin/artists/artists-preview/artists-preview.component';
import {ArtistsEditComponent} from './components/admin/artists/artists-edit/artists-edit.component';
import {GalleriesEditComponent} from './components/admin/galleies/galleries-edit/galleries-edit.component';
import {GalleriesListComponent} from './components/admin/galleies/galleries-list/galleries-list.component';
import {GalleriesAddComponent} from './components/admin/galleies/galleries-add/galleries-add.component';
import {GalleriesPreviewComponent} from './components/admin/galleies/galleries-preview/galleries-preview.component';
import {GalleriesActivationComponent} from './components/admin/galleies/galleries-activation/galleries-activation.component';

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
    AccountEditComponent,
    AccountPreviewComponent,
    AccountActivationComponent,
    StylesPreviewComponent,
    StylesListComponent,
    StylesEditComponent,
    StylesAddComponent,
    StylesActivationComponent,
    ErasListComponent,
    ErasAddComponent,
    ErasPreviewComponent,
    ErasEditComponent,
    ErasActivationComponent,
    ArtistsActivationComponent,
    ArtistsAddComponent,
    ArtistsListComponent,
    ArtistsPreviewComponent,
    ArtistsEditComponent,
    GalleriesEditComponent,
    GalleriesListComponent,
    GalleriesAddComponent,
    GalleriesPreviewComponent,
    GalleriesActivationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,

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
    MatTooltipModule,
    MatCheckboxModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
