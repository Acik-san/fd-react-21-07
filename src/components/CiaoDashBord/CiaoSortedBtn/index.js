import React from "react";
import { PropTypes } from "prop-types";

const CiaoSortedBtn = (props) => {
  const { isUpSortById, sortById, context } = props;
  return (
    <button onClick={sortById}>
      Sort by {context} {isUpSortById ? "DN" : "UP"}
    </button>
  );
};

CiaoSortedBtn.defaultProps = {
  isUpSortById: true,
  sortById: () => {},
  context: "Btn",
};
CiaoSortedBtn.propTypes = {
  isUpSortById: PropTypes.bool.isRequired,
  sortById: PropTypes.func.isRequired,
  context: PropTypes.string.isRequired,
};
export default CiaoSortedBtn;
