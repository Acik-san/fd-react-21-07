import React from "react";
import PropTypes from "prop-types";
import Spinner from "../../Spinner";
import Error from "../../Error";
import styles from "../UsersLoader.module.scss";

const ListLoader = (props) => {
  const { isFetching, isError, users } = props;
  const showUser = ({
    name: { first, last },
    email,
    login: { uuid },
    nat,
    gender,
  }) => (
    <li key={uuid} className={styles.user_container}>
      <h3>
        {first} {last} ({nat})
      </h3>
      <p>{gender}</p>
      <p>{email}</p>
    </li>
  );
  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : isError ? (
        <Error />
      ) : (
        <ul>{users.map(showUser)}</ul>
      )}
    </>
  );
};
ListLoader.defaultProps = { isFetching: false, isError: false, users: [] };
ListLoader.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
      nat: PropTypes.string,
      gender: PropTypes.string,
      login: PropTypes.object,
      name: PropTypes.object,
    })
  ),
};

export default ListLoader;
