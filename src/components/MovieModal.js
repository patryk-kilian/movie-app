import React, { Component } from "react";
import styles from "./MovieModal.css";
import { connect } from "react-redux";
import { closeModal } from "../actions/modalActions";
import { getDetails } from "../actions/moviesActions";

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
          <h1 onClick={() => this.props.closeModal()} className={styles.title}>
            {this.props.details.title}
          </h1>
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
