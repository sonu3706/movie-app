import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieshareService } from 'src/app/services/movieshare.service';
import { MoviesearchService } from 'src/app/services/moviesearch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesaveService } from 'src/app/services/moviesave/moviesave.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movieData: Movie[];
  public trendingMoviesData: Movie[];
  public trendingTvData: Movie[];

  constructor(
    private movieShare: MovieshareService,
    private movieSearch: MoviesearchService,
    private movieSave: MoviesaveService,
    private route: Router) { }

  ngOnInit() {
    if (this.route.url === '/trending') {
      this.getTrendingMovies();
    }
    if (this.route.url === '/tv') {
      this.getTredingTvShow();
    }
    if(this.route.url === '/mymovies') {
      this.getMySavedMovies();
    }
  }
  public searchResult(): void {
    this.movieShare.getMovieData().subscribe(data => {
      this.movieData = data;
      for (const movie of this.movieData) {
        movie.buttonValue = 'Save';
      }
    });
  }

  private getTrendingMovies(): void {
    this.movieSearch.getTrendingMovies('movie').subscribe(data => {
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

  private getMySavedMovies(): void {
    this.movieSave.getMySavedMovies().subscribe( data => {
      console.log(data);
      this.movieData = data;
      for(const movie of this.movieData){
        movie.buttonValue = 'Remove'
      }
    });

  }

  onEvent(event: any) {
    this.searchResult();
  }

  public selectedMovie(movie: Movie): void {
    console.log(movie);
    this.movieSave.saveMovie(movie).subscribe( data => {
      console.log(data);
    });
  }
}
