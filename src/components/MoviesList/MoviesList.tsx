import React from "react";
import Loader from "../Loader/Loader";
import MovieCard from "../MovieCard/MovieCard";
import { IMovie } from "../../interfaces";

interface IMovieList {
  data: IMovie[];
  loading: boolean;
  setLike: (id: string, hasLike: boolean) => void;
}

const MoviesList = ({ data, loading, setLike }: IMovieList): JSX.Element => (
  <>
    {loading ? (
      <Loader />
    ) : (
      <div className="row">
        {data.map((item) => (
          <MovieCard
            data={item}
            key={item.id}
            isDetail={false}
            handlers={{ setLike }}
          />
        ))}
      </div>
    )}
  </>
);

export default MoviesList;
