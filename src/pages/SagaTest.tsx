import React, { useEffect } from "react";
import Loader from "components/Loader/Loader";

interface ISagaTest {
  movies: any;
  getTrendsSaga: () => void;
}

const SagaTest = ({ movies, getTrendsSaga }: ISagaTest): JSX.Element => {
  useEffect(() => {
    getTrendsSaga();
  }, []);

  return (
    <div className="container">
      <h1>Saga Test page</h1>
      <p>
        Это страница для тестирования Саг и контейнера. Лоадер крутится вечно.)
      </p>
      <Loader />
    </div>
  );
};

export default SagaTest;
