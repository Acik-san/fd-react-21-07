import React, { Component } from "react";
import { PropTypes } from "prop-types";

const CiaoSortedList = (props) => {
  const { isUpSortByLastName, sortByLastName } = props;

  return (
    <section>
      <button onClick={sortByLastName}>
        Sort by Lastname {isUpSortByLastName ? "DN" : "UP"}
      </button>
    </section>
  );
};


export default CiaoSortedList;
