import React, { Component } from "react";
import styles from "./SearchForm.css";
import { connect } from "react-redux";
import { searchMovies } from "../actions/moviesActions";

class SearchForm extends Component {
  queryRef = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    this.props.queryHandler(this.queryRef.current.value);
    this.props.searchMovies(this.queryRef.current.value);
    event.currentTarget.reset();
  };

  render() {
    return (
      <div className={styles.searchBar}>
        <form
          onSubmit={this.handleSubmit}
          className={styles.searchForm}
          action=""
        >
          <input
            className={styles.searchInput}
            ref={this.queryRef}
            type="search"
            required
          />
          <input className={styles.button} type="submit" />
        </form>
        <button
          className={styles.buttonTopMovies}
          onClick={this.props.showTopMovies}
        >
          top movies
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items
});

export default connect(
  mapStateToProps,
  { searchMovies }
)(SearchForm);
