import React from "react";
import { Link, Outlet } from "react-router-dom";

const Cabinet = () => {
  return (
    <>
      <h1>Cabinet</h1>
      <Outlet />
      <ul>
        <li>
          <Link to="/cabinet/error">error</Link>
        </li>
        <li>
          <Link to="/cabinet/spinner">spinner</Link>
        </li>
      </ul>
    </>
  );
};

export default Cabinet;
