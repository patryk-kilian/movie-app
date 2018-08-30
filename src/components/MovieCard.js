import React, { Component } from "react";
import styles from "./MovieCard.css";
import { connect } from "react-redux";
import { openModal } from "../actions/modalActions";
import transitions from "./transitions.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <ReactCSSTransitionGroup
        transitionName={transitions}
        transitionAppear
        transitionEnterTimeout={500}
        transitionAppearTimeout={500}
        transitionLeaveTimeout={500}
      >
        <div
          onClick={() => {
            this.props.openModal(movie.id);
          }}
          className={styles.card}
        >
          <div className={styles.tittleBox}>
            <h1 className={styles.title}>{movie.title}</h1>
          </div>
          <img
            className={styles.image}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt=""
          />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default connect(
  () => ({}),
  { openModal }
)(MovieCard);
