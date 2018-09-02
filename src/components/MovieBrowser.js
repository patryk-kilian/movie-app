import React, { Component } from "react";
import { fetchTopMovies, searchMovies } from "../actions/moviesActions";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import styles from "./MovieBrowser.css";
import SearchForm from "./SearchForm";
import Pagination from "./Pagination";
import { FaSearch } from "react-icons/fa";

class MovieBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topMoviesPage: 1,
      searchResultsPage: 1,
      buttons: true,
      search: false,
      query: "",
      heading: "Top Movies"
    };
  }

  componentDidMount() {
    this.props.fetchTopMovies(this.state.fetchTopMovies);
  }

  handlePrevPage = () => {
    let page = 1;
    if (!this.state.search && this.state.topMoviesPage > 1) {
      page = this.state.topMoviesPage - 1;
      this.props.fetchTopMovies(page);
      this.setState({ topMoviesPage: page });
    } else if (this.state.search && this.state.searchResultsPage > 1) {
      page = this.state.searchResultsPage - 1;
      this.props.searchMovies(this.state.query, page);
      this.setState({ searchResultsPage: page });
    }
  };

  handleNextPage = () => {
    let page = 1;
    let totalPages = this.props.movies.items.total_pages;
    if (!this.state.search && this.state.topMoviesPage < totalPages) {
      page = this.state.topMoviesPage + 1;
      this.props.fetchTopMovies(page);
      this.setState({ topMoviesPage: page });
    } else if (this.state.search && this.state.searchResultsPage < totalPages) {
      page = this.state.searchResultsPage + 1;
      this.props.searchMovies(this.state.query, page);
      this.setState({ searchResultsPage: page });
    }
  };

  queryHandler = query => {
    this.setState({
      query,
      buttons: true,
      heading: "Search Results",
      searchResultsPage: 1
    });
  };

  showSearch = () => {
    if (!this.state.search) {
      this.setState({
        buttons: false,
        search: true
      });
    }
  };

  showTopMovies = () => {
    this.setState({
      buttons: true,
      search: false,
      heading: "Top Movies"
    });
    this.props.fetchTopMovies(this.state.topMoviesPage);
  };

  render() {
    const { results } = this.props.movies.items;
    const { items } = this.props.movies;

    if (results) {
      return (
        <div>
          <h1 className={styles.heading}>{this.state.heading}</h1>
          <div className={styles.container}>
            {results.map(movie => {
              return <MovieCard movie={movie} key={movie.id} />;
            })}
            {(() => {
              if (items.total_pages > 1 && this.state.buttons) {
                return (
                  <Pagination
                    handleNextPage={this.handleNextPage}
                    handlePrevPage={this.handlePrevPage}
                    searchPage={this.state.searchResultsPage}
                    topMoviesPage={this.state.topMoviesPage}
                    items={items}
                    search={this.state.search}
                  />
                );
              }
            })()}
            {(() => {
              if (this.state.search) {
                return (
                  <SearchForm
                    showTopMovies={this.showTopMovies}
                    queryHandler={this.queryHandler}
                  />
                );
              }
            })()}
            <button onClick={this.showSearch} className={styles.searchButton}>
              <FaSearch />
            </button>
          </div>
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
