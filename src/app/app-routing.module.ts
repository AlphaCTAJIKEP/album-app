import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {AlbumPageComponent} from './album-page/album-page.component';
import {HomePageComponent} from './home-page/home-page.component';

const appRoutes: Routes = [
  {path: 'albums/:id', component: AlbumPageComponent},
  {path: '', component: HomePageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{
}
