import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtysciComponent } from './artysci/artysci.component';
import { AlbumComponent } from './album/album.component';
import { OfertaWydawniczaComponent } from './oferta-wydawnicza/oferta-wydawnicza.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtysciComponent,
    AlbumComponent,
    OfertaWydawniczaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: "artysci", pathMatch:"full"},
      {path: 'artysci', component: ArtysciComponent},
      {path: 'album', component: AlbumComponent},
      {path: 'oferta-wydawnicza', component: OfertaWydawniczaComponent}
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
