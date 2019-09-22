import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input('movies') movies: Movie[];
  private movie: Movie;
  private modalSelected: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showMovie(movie: Movie): void {
    this.modalSelected = true;
    this.movie = movie;
  }
}
