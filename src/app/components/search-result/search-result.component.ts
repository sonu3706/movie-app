import { Component, OnInit } from '@angular/core';
import { MovieshareService } from 'src/app/services/movieshare.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  private movieData: Movie[];

  constructor(private movieShare: MovieshareService) { }

  ngOnInit() {
    this.searchResult();
  }
 private searchResult(): void {
    this.movieData = this.movieShare.getMovieData();
    for(const movie of this.movieData){
      movie.buttonValue = 'Save';
    }
  }
}
