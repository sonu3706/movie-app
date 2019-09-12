import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movieData: Movie[];
  @Output() selectedMovie = new EventEmitter<Movie>();
  public movie: Movie;
  public modalSelected = false;
  constructor() {
  }

  ngOnInit() {
  }

  onAction(movie: Movie) {
    this.selectedMovie.emit(movie);
  }

  showMovie(movie: Movie): void {
    this.modalSelected = true;
    this.movie = movie;
  }
}
