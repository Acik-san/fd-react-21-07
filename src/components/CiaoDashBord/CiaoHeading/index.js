import React, { Component } from "react";
import { PropTypes } from "prop-types";

const CiaoHeading = (props) => {
  const { content, className, title } = props;
  return (
    <h1 className={className} title={title}>
      {content}
    </h1>
  );
};

CiaoHeading.defaultProps = {
  content: "Heading",
  className: "className",
  title: "title",
};
CiaoHeading.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};
export default CiaoHeading;
