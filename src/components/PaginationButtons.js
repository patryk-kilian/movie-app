import React, { Component } from "react";
import styles from "./PaginationButtons.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

class PaginationButtons extends Component {
  render() {
    return (
      <div className={styles.paginationButtons}>
        <button
          onClick={this.props.handlePrevPage}
          className={styles.paginationButton}
        >
          <FaArrowAltCircleLeft className={styles.icon} />
        </button>
        <button
          onClick={this.props.handleNextPage}
          className={styles.paginationButton}
        >
          <FaArrowAltCircleRight className={styles.icon} />
        </button>
      </div>
    );
  }
}

export default PaginationButtons;
