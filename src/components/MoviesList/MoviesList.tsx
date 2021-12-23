import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import MovieCard from "../MovieCard/MovieCard";
import { IMovie } from "../../interfaces";

interface IMovieList {
  data: IMovie[];
  loading: boolean;
  setLike: (id: string, hasLike: boolean) => void;
  delMovie: (id: string) => void;
  isFavoriteMode: boolean;
}

const MoviesList = ({
  data,
  loading,
  setLike,
  delMovie,
  isFavoriteMode,
}: IMovieList): JSX.Element => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    setMovies(!isFavoriteMode ? data : data.filter((el) => el.hasLike));
  }, [isFavoriteMode, data]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="row">
          {movies.map((item) => (
            <MovieCard
              data={item}
              key={item.id}
              isDetail={false}
              handlers={{ setLike, delMovie }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MoviesList;
