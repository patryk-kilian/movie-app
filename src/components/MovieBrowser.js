import React, { Component } from "react";
import { fetchMovies } from "../actions/moviesActions";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import styles from "./MovieBrowser.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

class MovieBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  componentDidMount() {
    this.props.fetchMovies(this.state.currentPage);
  }

  handlePagination = direction => {
    let page = 1;
    if (direction === "next") {
      page = this.state.currentPage + 1;
      this.props.fetchMovies(page);
    } else if (direction === "prev" && this.state.currentPage > 1) {
      page = this.state.currentPage - 1;
      this.props.fetchMovies(page);
    }
    this.setState({ currentPage: page });
  };

  render() {
    const { results } = this.props.movies;

    if (results) {
      return (
        <div className={styles.container}>
          {results.map(movie => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
          <div className={styles.paginationButtons}>
            <button
              onClick={() => this.handlePagination("prev")}
              className={styles.paginationButton}
            >
              <FaArrowAltCircleLeft className={styles.icon} />
            </button>
            <button
              onClick={() => this.handlePagination("next")}
              className={styles.paginationButton}
            >
              <FaArrowAltCircleRight className={styles.icon} />
            </button>
          </div>
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
