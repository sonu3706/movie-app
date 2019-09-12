package com.app.movie.service;

import com.app.movie.model.Movie;
import com.app.movie.model.Review;
import com.app.movie.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.List;

@Service
public class MovieServiceImpl implements MovieService {

    private MovieRepository movieRepository;

    @Autowired
    public MovieServiceImpl(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @Override
    public Movie saveMovie(Movie movie) {
        if (!movieRepository.existsById(movie.getId())) {
            movie = movieRepository.save(movie);
        } else {
            // TODO "Throw new Exception";
        }
        return movie;
    }

    @Override
    public Movie getMovieById(int id) {
        Movie fetchedMovie = null;
        if (movieRepository.existsById(id)) {
            fetchedMovie = movieRepository.findById(id).get();
        } else {
            // TODO "Throw exception movie not found"
        }
        return fetchedMovie;
    }

    @Override
    public Movie updateMovie(int id, Movie movie) {
        Movie fetchedMovie = null;
        if (movieRepository.existsById(id)) {
            fetchedMovie = movieRepository.findById(id).get();
        }
        return null;
    }

    @Override
    public Movie addReview(int id, Review review) {
        Movie fetchedMovie = null;
        List<Review> reviews = null;
        if (movieRepository.existsById(id)) {
            fetchedMovie = movieRepository.findById(id).get();
            reviews = fetchedMovie.getReviews();
            if (reviews != null) {
                review.setReviewAddedOn(new Date().toString());
                reviews.add(review);
            }
        }
        return fetchedMovie;
    }

    @Override
    public Movie updateReview(int id, Review review) {
        return null;
    }

    @Override
    public Movie deleteReview(int id) {
        return null;
    }

    @Override
    public Movie getAllreviewByMovieId() {
        return null;
    }

    @Override
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @Override
    public Boolean deleteMovieById(int id) {
        boolean status = false;
        if (movieRepository.existsById(id)) {
            Movie fetchedMovie = movieRepository.findById(id).get();
            movieRepository.delete(fetchedMovie);
            status = true;
        }
        return status;
    }
}
