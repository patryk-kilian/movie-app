import React, { Component } from "react";
import styles from "./Pagination.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

class PaginationButtons extends Component {
  render() {
    return (
      <div className={styles.pagination}>
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
        <div className={styles.pages}>
          <span>page: </span>
          <span>
            {this.props.search
              ? this.props.searchPage
              : this.props.topMoviesPage}
          </span>
          <span> of </span>
          <span>{this.props.items.total_pages}</span>
        </div>
      </div>
    );
  }
}

export default PaginationButtons;
