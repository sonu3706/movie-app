import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieshareService } from 'src/app/services/movieshare.service';
import { MoviesearchService } from 'src/app/services/moviesearch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private movieData: Movie[];
  private trendingMoviesData: Movie[];
  private trendingTvData: Movie[];

  constructor(
    private movieShare: MovieshareService,
    private movieSearch: MoviesearchService,
    private route: Router) { }

  ngOnInit() {
    console.log('home');
    if(this.route.url === '/trending'){
      this.getTrendingMovies();
    }
    if(this.route.url === '/tv'){
      this.getTredingTvShow();
    }
  }
  public searchResult(): void {
   this.movieShare.getMovieData().subscribe( data => {
     this.movieData = data;
     for (const movie of this.movieData) {
      movie.buttonValue = 'Save';
    }
   });
  }

  private getTrendingMovies(): void {
    this.movieSearch.getTrendingMovies('movie').subscribe(data => {
      console.log(data.results);
      this.trendingMoviesData = data.results;
      for (const movie of this.trendingMoviesData) {
        movie.buttonValue = 'Save';
      }
    });
  }

  private getTredingTvShow(): void {
    this.movieSearch.getTrendingMovies('tv').subscribe(data => {
      this.trendingTvData = data.results;
      for (const tv of this.trendingTvData) {
        tv.buttonValue = 'Save';
      }
    });
  }

  onEvent( event: any){
    this.searchResult();
  }
}
