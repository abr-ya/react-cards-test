import React, { memo } from "react";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Heart, HeartFill, Trash } from "react-bootstrap-icons";
import { IMovie } from "../../interfaces";
import styles from "./movieCard.module.scss";

export interface IMovieCard {
  data: IMovie;
  isDetail: boolean;
  handlers?: any; // ToDo: Update it!
}

const MovieCard = ({ data, isDetail, handlers }: IMovieCard): JSX.Element => {
  // for memo test
  console.log(`MovieCard rendered`);
  const likeHandler = (isLike: boolean) => {
    // console.log("likeHandler", data.id, isLike);
    if (handlers.setLike) handlers.setLike(data.id, isLike);
  };

  const deleteHandler = () => {
    console.log("deleteHandler", data.id);
  };

  return (
    <div className={`col-md-${isDetail ? 12 : 3} mb-3`}>
      <div className={`${styles.card} ${isDetail ? "card flex-row" : "card"}`}>
        {data.poster && (
          <div className={styles.imgWrapper}>
            {!isDetail && (
              <div className={styles.buttons}>
                <Button
                  variant="outline-info"
                  className="mb-1"
                  onClick={() => likeHandler(!data.hasLike)}
                >
                  {data.hasLike ? (
                    <HeartFill color="red" size={18} />
                  ) : (
                    <Heart color="red" size={18} />
                  )}
                </Button>
                <Button
                  variant="outline-danger"
                  className="mb-1"
                  onClick={deleteHandler}
                >
                  <Trash color="black" size={18} />
                </Button>
              </div>
            )}
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
};

const movieLikeAreEqual = (
  prevMovie: IMovieCard,
  nextMovie: IMovieCard,
): boolean => prevMovie.data.hasLike === nextMovie.data.hasLike;

export default memo(MovieCard, movieLikeAreEqual);
