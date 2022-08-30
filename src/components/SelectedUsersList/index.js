import React, { Component } from "react";

const SelectedUsersList = (props) => {
  const { users } = props;
  const usersSelected = users.filter((user) => user.isSelected);

  return (
    <section>
      <h2>Selected users:</h2>
      {usersSelected.map((user, i) => (
        <p key={i}>{user.firstName}</p>
      ))}
    </section>
  );
};

export default SelectedUsersList;
