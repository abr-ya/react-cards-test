import React, { useEffect } from "react";
import MoviesList from "components/MoviesList/MoviesListContainer";

interface IHome {
  getTrendsSaga: () => void;
}

const Home = ({ getTrendsSaga }: IHome): JSX.Element => {
  useEffect(() => {
    getTrendsSaga();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Список карточек</h1>
      <h2>About</h2>
      <p>Это вариант для публикации на gh-pages. В нём отключен роутер.</p>
      <p>
        Вариант с роутером, автоматическим деплоем и полным описанием приложения
        размещён{" "}
        <a
          href="https://elastic-borg-38c650.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          на Netlify
        </a>
        .
      </p>
      <h2>Фильмы и сериалы из списка `trends`</h2>
      <MoviesList />
    </div>
  );
};

export default Home;
