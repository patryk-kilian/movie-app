import React, { Component } from "react";
import styles from "./MovieModal.css";
import { connect } from "react-redux";
import { closeModal } from "../actions/modalActions";
import { getDetails } from "../actions/moviesActions";
import { FaTimes } from "react-icons/fa";

class MovieModal extends Component {
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.modal.movieID &&
      this.props.modal.movieID !== nextProps.modal.movieID
    ) {
      nextProps.getDetails(nextProps.modal.movieID);
    }
  }

  render() {
    if (this.props.modal.isOpen === true) {
      return (
        <div className={styles.modal}>
          <div className={styles.modalBox}>
            <h1 className={styles.title}>{this.props.details.title}</h1>
            <p className={styles.description}>{this.props.details.overview}</p>
            <div className={styles.ratings}>
              <span className={styles.rating}>
                {this.props.details.vote_average * 10}
                <span>%</span>
              </span>
            </div>
            <figure className={styles.modalFig}>
              <img
                className={styles.image}
                src={`https://image.tmdb.org/t/p/original${
                  this.props.details.backdrop_path
                }`}
                alt=""
              />
            </figure>
            <button
              onClick={() => this.props.closeModal()}
              className={styles.closeButton}
            >
              <FaTimes className={styles.closeIcon} />
            </button>
          </div>
        </div>
      );
    } else {
      return <span />;
    }
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  details: state.movies.details
});

export default connect(
  mapStateToProps,
  { closeModal, getDetails }
)(MovieModal);
