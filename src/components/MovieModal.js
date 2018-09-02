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
    const { details } = this.props;

    if (this.props.modal.isOpen === true) {
      return (
        <div className={styles.modal}>
          <div className={styles.modalBox}>
            <h3 className={styles.title}>{details.title}</h3>
            <p className={styles.description}>{details.overview}</p>
            <div className={styles.info}>
              <div className={styles.infoBox}>
                <span className={styles.infoName}>rating</span>
                <span className={styles.infoContent}>
                  {details.vote_average}
                  /10
                </span>
              </div>
              <div className={styles.infoBox}>
                <span className={styles.infoName}>budget</span>
                <span className={styles.infoContent}>
                  {details.budget > 1000000
                    ? details.budget / 1000000 + " mln"
                    : details.budget}
                </span>
              </div>
              <div className={styles.infoBox}>
                <span className={styles.infoName}>relase date</span>
                <span className={styles.infoContent}>
                  {details.release_date}
                </span>
              </div>
              <div className={styles.infoBox}>
                <span className={styles.infoName}>runtime</span>
                <span className={styles.infoContent}>
                  {details.runtime} min
                </span>
              </div>
            </div>
            <figure className={styles.modalFig}>
              <img
                className={styles.image}
                src={`https://image.tmdb.org/t/p/w780${
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
      return null;
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
