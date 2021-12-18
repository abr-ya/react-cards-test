import React from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../../interfaces";
import styles from "./movieCard.module.scss";

export interface IMovieCard {
  data: IMovie;
  isDetail: boolean;
}

const MovieCard = ({ data, isDetail }: IMovieCard): JSX.Element => (
  <div className={`col-md-${isDetail ? 12 : 3} mb-3`}>
    <div className={`${styles.card} ${isDetail ? "card flex-row" : "card"}`}>
      {data.poster && (
        <div className={styles.imgWrapper}>
          <img src={`https://image.tmdb.org/t/p/w200${data.poster}`} alt="" />
        </div>
      )}
      <div className="card-body">
        {/* <Link to={`/movie/${data.id}`}></Link> */}
        <h5 className="card-title">{data.name}</h5>
        <p>{data.overview}</p>
        <div className="badge badge-success">
          {`popularity: ${data.popularity}`}
        </div>
        <div className="badge badge-info">
          {`rating: ${data.voteAverage} (from ${data.voteCount})`}
        </div>
      </div>
    </div>
  </div>
);

export default MovieCard;
