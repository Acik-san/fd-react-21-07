import React from "react";
import FuncPhoneList from "../components/FuncPhoneList";
import FuncUsersList from "../components/FuncUsersList";
import UserProfile from "../components/UserProfile";

const HomePage = () => {
  return (
    <div>
      <h1>HOME</h1>
      <FuncUsersList />
      <FuncPhoneList />
      <UserProfile />
    </div>
  );
};

export default HomePage;
