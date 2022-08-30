import React, { Component } from "react";
import style from "./UsersList.module.css";
import { PropTypes } from "prop-types";
import UserCard, { userPropTypes } from "../UserCard";

const UsersList = (props) => {
  const { users, setUserSelected } = props;
  const setIsSelected = (id) => {
    const newUsers = users.map((user) => ({
      ...user,
      isSelected: user.id === id ? !user.isSelected : user.isSelected,
    }));
    setUserSelected(newUsers);
  };
  const showUser = (user) => (
    <UserCard key={user.id} user={user} setIsSelected={setIsSelected} />
  );

  return (
    <>
      <section className={style.container}>
        <h2>Users list:</h2>
        {users.map(showUser)}
      </section>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(userPropTypes).isRequired,
  setUserSelected: PropTypes.func,
};
export default UsersList;
