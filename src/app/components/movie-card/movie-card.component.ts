import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesearchService } from 'src/app/services/moviesearch.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input('movies') movies: Movie[];
  @Output() selectedMovie = new EventEmitter<Movie>();
  public movie: Movie;
  public modalSelected: boolean = false;

  constructor(private movieSearch: MoviesearchService) { }

  ngOnInit() {
  }

 public showMovie(movie: Movie): void {
    this.movieSearch.getMovieDetails(movie.id).subscribe(data => {
      this.movie = data;
      this.movieSearch.getMovieReviews(movie.id).subscribe( response => {
        this.movie.reviews = response.results;
        console.log(this.movie.reviews);
      });
      this.modalSelected = true;
    });
  }

  public saveMovie(movie: Movie): void {
    console.log(movie);
    this.selectedMovie.emit(movie);
  }
}
