import React, { Component } from "react";
import styles from "./MovieCard.css";
import { connect } from "react-redux";
import { openModal } from "../actions/modalActions";

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div
        onClick={() => {
          this.props.openModal(movie.id);
        }}
        className={styles.card}
      >
        <h1 className={styles.title}>{movie.title}</h1>
        <img
          className={styles.image}
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt=""
        />
      </div>
    );
  }
}

export default connect(
  () => ({}),
  { openModal }
)(MovieCard);
