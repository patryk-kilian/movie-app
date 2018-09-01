import React, { Component } from "react";
import styles from "./SearchForm.css";
import { connect } from "react-redux";
import { searchMovies } from "../actions/moviesActions";

class SearchForm extends Component {
  queryRef = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    if (this.queryRef.current.value) {
      this.props.queryHandler(this.queryRef.current.value);
      this.props.searchMovies(this.queryRef.current.value);
      event.currentTarget.reset();
    }
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={styles.searchInput}
        action=""
      >
        <input ref={this.queryRef} type="search" />
        <input type="submit" />
      </form>
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
