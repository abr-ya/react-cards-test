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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        a rem id quae officiis distinctio ipsa, quidem nisi amet eos?
      </p>
      <Loader />
    </div>
  );
};

export default SagaTest;
