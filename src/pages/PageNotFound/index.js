import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => navigate("/", { replace: true }), 3000);
  return (
    <>
      <h1>404</h1>
      <p>Now you'll be redirect to Home</p>
    </>
  );
};

export default PageNotFound;
