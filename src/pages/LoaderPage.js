import React from "react";
import DataLoader from "../components/DataLoader";
import { loadNames, loadPhones } from "../api";
import Error from "../components/Error";
import Spinner from "../components/Spinner";

const LoaderPage = () => {
  const renderNames = ({ data, error, isFetching }) => {
    if (error) {
      return <Error />;
    }
    if (isFetching) {
      return <Spinner />;
    }
    return (
      <ul>
        {data.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    );
  };
  const renderPhones = ({ data, error, isFetching }) => {
    if (error) {
      return <Error />;
    }
    if (isFetching) {
      return <Spinner />;
    }
    return (
      <ul>
        {data.map(({ id, name, price }) => (
          <li key={id}>
            {name} price:{price}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <DataLoader getData={loadNames} render={renderNames} />
      <DataLoader getData={loadPhones} render={renderPhones} />
    </div>
  );
};

export default LoaderPage;
