import React from "react";
import { WithUser } from "../../HOCs";

const UserProfile = (props) => {
  const {
    user: { fname, lname, avatar },
  } = props;
  return (
    <div>
      USER:
      <h2>
        {fname} {lname}
      </h2>
      <img src={avatar} alt={lname} />
    </div>
  );
};

export default WithUser(UserProfile);
