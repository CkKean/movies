import { get } from "../utils/customRequest";

const baseUrl = "https://api.themoviedb.org/3/movie";

const getNowPlaying = async <T>({
  pageNumber = 1,
}: {
  pageNumber: number;
}): Promise<T> => {
  return get(`${baseUrl}/now_playing?page=${pageNumber}&sort_by=release_date.desc`);
};

const getTopRated = async <T>({
  pageNumber = 1,
}: {
  pageNumber: number;
}): Promise<T> => {
  return get(`${baseUrl}/top_rated?page=${pageNumber}`);
};

const getDetails = async <T>(movieID: number): Promise<T> => {
  return get(`${baseUrl}/${movieID}`);
};

const MovieService = {
  getNowPlaying,
  getTopRated,
  getDetails,
};

export default MovieService;