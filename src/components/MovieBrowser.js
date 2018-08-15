import React, { Component } from "react";
import { fetchMovies } from "../actions/moviesActions";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import styles from "./MovieBrowser.css";

class MovieBrowser extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const { results } = this.props.movies;

    if (results) {
      return (
        <div className={styles.container}>
          {results.map(movie => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      );
    } else {
      return (
        <div>
          <h1>ssadas</h1>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items
});

export default connect(
  mapStateToProps,
  { fetchMovies }
)(MovieBrowser);
