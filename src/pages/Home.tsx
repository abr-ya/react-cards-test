import React, { useEffect } from "react";
import MoviesList from "components/MoviesList/MoviesListContainer";

const Home = ({ getTrendsSaga }): JSX.Element => {
  useEffect(() => {
    getTrendsSaga();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Список карточек - Trends</h1>
      <MoviesList />
    </div>
  );
};

export default Home;
