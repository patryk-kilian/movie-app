import React, { Component } from "react";
import { fetchMovies, searchMovies } from "../actions/moviesActions";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import styles from "./MovieBrowser.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import SearchForm from "./SearchForm";

class MovieBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pipka: true
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

  showSearch = () => {
    this.setState({
      pipka: false
    });
  };

  showButtons = () => {
    this.setState({ pipka: true });
    this.props.fetchMovies(this.state.currentPage);
  };

  render() {
    const { results } = this.props.movies;

    if (results) {
      return (
        <div className={styles.container}>
          {results.map(movie => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
          {(() => {
            if (this.state.pipka) {
              return (
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
              );
            } else {
              return (
                <div className={styles.searchBar}>
                  <SearchForm />
                  <button
                    onClick={this.showButtons}
                    className={styles.searchButton}
                  >
                    show top movies
                  </button>
                </div>
              );
            }
          })()}
          <button onClick={this.showSearch} className={styles.searchButton}>
            search
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items
});

export default connect(
  mapStateToProps,
  { fetchMovies, searchMovies }
)(MovieBrowser);
