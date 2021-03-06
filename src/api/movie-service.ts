import axios from "axios";
import { IMovie } from "../interfaces";

const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = process.env.API_KEY;

// поиск или тренды
const selectFields = (item: any) => ({
  id: item.id,
  name: item.title || item.name,
  overview: item.overview,
  popularity: item.popularity,
  poster: item.poster_path,
  release: item.release_date,
  voteAverage: item.vote_average,
  voteCount: item.vote_count,
  site: "",
  imdb: "",
  hasLike: false,
});

export const findMovies = async (query: string, page = 1) => {
  const response = await axios.get(
    `${baseUrl}search/movie?api_key=${apiKey}&query=${query}&page=${page}`,
  );
  const currentPage: IMovie[] = response.data.results.map(selectFields);
  const res = {
    currentPage,
    page: response.data.page,
    totalPages: response.data.total_pages,
  };

  // ToDo: подумать над обработкой ошибок!
  return response.status === 200 ? res : null;
};

export const getTrends = async (type = "all", period = "day", page = 1) => {
  const response = await axios.get(
    `${baseUrl}trending/${type}/${period}?api_key=${apiKey}&page=${page}`,
  );
  const currentPage: IMovie[] = response.data.results.map(selectFields);
  const res = {
    currentPage,
    page: response.data.page,
    totalPages: response.data.total_pages,
  };

  // ToDo: подумать над обработкой ошибок!
  return response.status === 200 ? res : null;
};

// отдельный фильм
const selectOneMovieFields = (item: any) => ({
  id: item.id,
  name: item.title,
  overview: item.overview,
  popularity: item.popularity,
  poster: item.poster_path,
  release: item.release_date,
  voteAverage: item.vote_average,
  voteCount: item.vote_count,
  site: item.homepage,
  imdb: item.imdb_id,
});

export const getMovie = async (id: string) => {
  const response = await axios.get(`${baseUrl}movie/${id}?api_key=${apiKey}`);
  return response.status === 200 ? selectOneMovieFields(response.data) : false;
};
