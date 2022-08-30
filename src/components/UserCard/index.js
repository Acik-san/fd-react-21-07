import React, { useContext } from "react";
// import { PropTypes } from "prop-types";
import { UserContext } from "../../contexts";

const UserCard = () => {
  const [user, setUser] = useContext(UserContext);
  const { id, fname, lname, isSelected } = user;
  const styles = { backgroundColor: isSelected ? "teal" : "pink" };
  const handlerBtn = () => setUser({ ...user, isSelected: !isSelected });
  return (
    <article style={styles}>
      <h3>
        id={id} {fname} {lname}
      </h3>
      <button onClick={handlerBtn}>Select this user</button>
    </article>
  );
};

// export const userPropTypes = PropTypes.shape({
//   id: PropTypes.number.isRequired,
//   fname: PropTypes.string.isRequired,
//   lname: PropTypes.string.isRequired,
//   isSelected: PropTypes.bool,
// }).isRequired;

// UserCard.propTypes = {
//   user: userPropTypes,
//   setIsSelected: PropTypes.func.isRequired,
// };
export default UserCard;
