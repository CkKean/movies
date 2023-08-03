import { Response } from "../models/response";
import { get } from "../utils/customRequest";

const baseUrl = "https://api.themoviedb.org/3/search";

const searchMovie = async <T>(
  title: string,
  pageNumber: number
): Promise<Response<T>> => {
  return get(`${baseUrl}/movie?query=${title}&page=${pageNumber}`);
};

const SearchService = { searchMovie };

export default SearchService;
