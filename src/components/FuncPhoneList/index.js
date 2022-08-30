import React from "react";
import Spinner from "../Spinner";
import Error from "../Error";
import { useData } from "../../hooks";
import { loadPhones } from "../../api";

const FuncPhoneList = () => {
  const { data, error, isFetching } = useData(loadPhones);
  const showData = (phone) => (
    <li key={phone.id}>
      {phone.name} : {phone.price}
    </li>
  );
  return (
    <>
      {isFetching && <Spinner />}
      {error && <Error />}
      <ol>{data.map(showData)}</ol>
    </>
  );
};

export default FuncPhoneList;
