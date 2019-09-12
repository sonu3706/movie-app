package com.app.movie.service;

import com.app.movie.model.Movie;
import com.app.movie.model.Review;

import java.util.List;

public interface MovieService {
   Movie saveMovie(Movie movie);
   Movie getMovieById(int id);
   Movie updateMovie(int id, Movie movie);
   Movie addReview(int id, Review review);
   Movie updateReview(int id, Review review);
   Movie deleteReview(int id);
   Movie getAllreviewByMovieId();
   List<Movie> getAllMovies();
   Boolean deleteMovieById(int id);
}
