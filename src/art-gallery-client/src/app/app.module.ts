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
  MatCheckboxModule, MatDatepickerModule, MatGridListModule,
  MatListModule, MatNativeDateModule,
  MatPaginatorModule, MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import {GalleriesEditComponent} from './components/admin/galleries/galleries-edit/galleries-edit.component';
import {GalleriesListComponent} from './components/admin/galleries/galleries-list/galleries-list.component';
import {GalleriesAddComponent} from './components/admin/galleries/galleries-add/galleries-add.component';
import {GalleriesPreviewComponent} from './components/admin/galleries/galleries-preview/galleries-preview.component';
import {GalleriesActivationComponent} from './components/admin/galleries/galleries-activation/galleries-activation.component';
import {ExhibitionsListComponent} from './components/admin/exhibitions/exhibitions-list/exhibitions-list.component';
import {ExhibitionsAddComponent} from './components/admin/exhibitions/exhibitions-add/exhibitions-add.component';
import {ExhibitionsEditComponent} from './components/admin/exhibitions/exhibitions-edit/exhibitions-edit.component';
import {ExhibitionsPreviewComponent} from './components/admin/exhibitions/exhibitions-preview/exhibitions-preview.component';
import {RoomsListComponent} from './components/admin/rooms/rooms-list/rooms-list.component';
import {RoomsAddComponent} from './components/admin/rooms/rooms-add/rooms-add.component';
import {RoomsPreviewComponent} from './components/admin/rooms/rooms-preview/rooms-preview.component';
import {RoomsActivationComponent} from './components/admin/rooms/rooms-activation/rooms-activation.component';
import {RoomsEditComponent} from './components/admin/rooms/rooms-edit/rooms-edit.component';
import {ArtefactsListComponent} from './components/admin/artefacts/artefacts-list/artefacts-list.component';
import {ArtefactsAddComponent} from './components/admin/artefacts/artefacts-add/artefacts-add.component';
import {ArtefactsEditComponent} from './components/admin/artefacts/artefacts-edit/artefacts-edit.component';
import {ArtefactsPreviewComponent} from './components/admin/artefacts/artefacts-preview/artefacts-preview.component';
import {ArtefactsActivationComponent} from './components/admin/artefacts/artefacts-activation/artefacts-activation.component';
import { SiteHeaderComponent } from './components/site/_layout/site-header/site-header.component';
import { SiteContentComponent } from './components/site/_layout/site-content/site-content.component';
import { SiteFooterComponent } from './components/site/_layout/site-footer/site-footer.component';
import { LastArtefactsComponent } from './components/site/last-artefacts/last-artefacts.component';
import { LastArtefactsSlideshowComponent } from './components/site/last-artefacts-slideshow/last-artefacts-slideshow.component';
import { LastExhibitionsComponent } from './components/site/last-exhibitions/last-exhibitions.component';
import { LastArtistsComponent } from './components/site/last-artists/last-artists.component';
import { GalleriesComponent } from './components/site/galleries/galleries.component';
import { ExhibitionsComponent } from './components/site/exhibitions/exhibitions.component';
import { AboutComponent } from './components/site/about/about.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { MenuItemComponent } from './components/site/menu-item/menu-item.component';
import { RoomComponent } from './components/site/room/room.component';
import { PreviewExhibitionComponent } from './components/site/preview-exhibition/preview-exhibition.component';
import { ArtefactsComponent } from './components/site/artefacts/artefacts.component';
import { PreviewArtefactComponent } from './components/site/preview-artefact/preview-artefact.component';
import { ListExhibitionsComponent } from './components/site/list-exhibitions/list-exhibitions.component';
import { ListArtefactsComponent } from './components/site/list-artefacts/list-artefacts.component';

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
    GalleriesActivationComponent,
    ExhibitionsListComponent,
    ExhibitionsAddComponent,
    ExhibitionsEditComponent,
    ExhibitionsPreviewComponent,
    RoomsListComponent,
    RoomsAddComponent,
    RoomsPreviewComponent,
    RoomsActivationComponent,
    RoomsEditComponent,
    ArtefactsListComponent,
    ArtefactsAddComponent,
    ArtefactsEditComponent,
    ArtefactsPreviewComponent,
    ArtefactsActivationComponent,
    SiteHeaderComponent,
    SiteContentComponent,
    SiteFooterComponent,
    LastArtefactsComponent,
    LastArtefactsSlideshowComponent,
    LastExhibitionsComponent,
    LastArtistsComponent,
    GalleriesComponent,
    ExhibitionsComponent,
    AboutComponent,
    ContactComponent,
    MenuItemComponent,
    RoomComponent,
    PreviewExhibitionComponent,
    ArtefactsComponent,
    PreviewArtefactComponent,
    ListExhibitionsComponent,
    ListArtefactsComponent
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
    MatSelectModule,
    NgbModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
