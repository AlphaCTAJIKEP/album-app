import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import {ServerService} from './server.service';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AlbumPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
