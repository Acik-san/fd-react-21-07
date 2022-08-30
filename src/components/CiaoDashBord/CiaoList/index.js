import React from "react";
import Ciao from "../Ciao";
import { PropTypes } from "prop-types";

const CiaoList = (props) => {
  const { users } = props;
  const mapUsers = (user) => {
    return (
      <li key={user.id}>
        <Ciao fname={user.firstName} sname={user.lastName} id={user.id} />
      </li>
    );
  };

  return <ol>{users.map(mapUsers)}</ol>;
};

CiaoList.defaultProps = {
  users: PropTypes.shape({
    id: 0,
    firstName: "Noname",
    lastName: "Noname",
  }),
};
CiaoList.propTypes = {
  users: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }),
};
export default CiaoList;
