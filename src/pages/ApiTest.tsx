import React, { useEffect, useState, FC } from "react";
import { getTrends, getMovie } from "../api/movie-service";
import Loader from "components/Loader/Loader";

const ApiTest: FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrends().then((res) => {
      console.log(res);
      setLoading(false);
    });
    getMovie("429").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="container">
      <h1>Api Test page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        a rem id quae officiis distinctio ipsa, quidem nisi amet eos?
      </p>
      {loading && <Loader />}
    </div>
  );
};

export default ApiTest;
