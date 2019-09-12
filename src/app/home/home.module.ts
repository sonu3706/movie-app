import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import {SharedModule} from '../shared/shared.module';
import { MyMovieComponent } from './components/my-movie/my-movie.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';




@NgModule({
  declarations: [HomeComponent, MovieCardComponent, MyMovieComponent, NavBarComponent, SearchResultComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class HomeModule { }
