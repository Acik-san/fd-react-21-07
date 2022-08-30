import React, { Component } from "react";
import SelectedUsersList from "../SelectedUsersList";
import UsersList from "../UsersList";
import styles from "./UsersDashbord.module.css";

const usersDB = [
  { id: 4, firstName: "Elon", lastName: "Musk" },
  { id: 1, firstName: "Tom", lastName: "Hard" },
  { id: 3, firstName: "Elen", lastName: "Musk" },
  { id: 2, firstName: "Freddie", lastName: "Mercury" },
  { id: 5, firstName: "Elton", lastName: "Jhon" },
];

class UsersDashbord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB.map((user) => ({ ...user, isSelected: false })),
    };
  }
  setUsers = (newUsers) => {
    this.setState({ users: newUsers });
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <header className={styles.container}>
          <SelectedUsersList users={users} />
        </header>
        <main className={styles.container}>
          <UsersList users={users} setUserSelected={this.setUsers} />
        </main>
      </>
    );
  }
}

export default UsersDashbord;
