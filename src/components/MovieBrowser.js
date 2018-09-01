import React, { Component } from "react";
import { fetchTopMovies, searchMovies } from "../actions/moviesActions";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import styles from "./MovieBrowser.css";
import SearchForm from "./SearchForm";
import PaginationButtons from "./PaginationButtons";

class MovieBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topMoviesPage: 1,
      searchResultsPage: 1,
      pipka: true,
      query: ""
    };
  }

  componentDidMount() {
    this.props.fetchTopMovies(this.state.fetchTopMovies);
  }

  handlePrevPage = () => {
    let page = 1;
    if (this.state.pipka && this.state.topMoviesPage > 1) {
      page = this.state.topMoviesPage - 1;
      this.props.fetchTopMovies(page);
      this.setState({ topMoviesPage: page });
    } else if (!this.state.pipka && this.state.searchResultsPage > 1) {
      page = this.state.searchResultsPage - 1;
      this.props.searchMovies(this.state.query, page);
      this.setState({ searchResultsPage: page });
    }
  };

  handleNextPage = () => {
    let page = 1;
    let totalPages = this.props.movies.items.total_pages;
    if (this.state.pipka && this.state.topMoviesPage < totalPages) {
      console.log(totalPages);
      page = this.state.topMoviesPage + 1;
      this.props.fetchTopMovies(page);
      this.setState({ topMoviesPage: page });
    } else if (!this.state.pipka && this.state.searchResultsPage < totalPages) {
      console.log(totalPages);
      page = this.state.searchResultsPage + 1;
      this.props.searchMovies(this.state.query, page);
      this.setState({ searchResultsPage: page });
    }
  };

  queryHandler = query => {
    this.setState({
      query
    });
  };

  showSearch = () => {
    this.setState({
      pipka: false
    });
  };

  showButtons = () => {
    this.setState({ pipka: true });
    this.props.fetchTopMovies(this.state.topMoviesPage);
  };

  render() {
    const { results } = this.props.movies.items;
    const { items } = this.props.movies;

    if (results) {
      return (
        <div className={styles.container}>
          {results.map(movie => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
          {(() => {
            if (items.total_pages > 1) {
              return (
                <PaginationButtons
                  handleNextPage={this.handleNextPage}
                  handlePrevPage={this.handlePrevPage}
                />
              );
            }
          })()}
          {(() => {
            if (!this.state.pipka) {
              return (
                <div className={styles.searchBar}>
                  <SearchForm queryHandler={this.queryHandler} />
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
  movies: state.movies
});

export default connect(
  mapStateToProps,
  { fetchTopMovies, searchMovies }
)(MovieBrowser);
