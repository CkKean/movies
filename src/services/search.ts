import { Response } from "../models/response";
import { get } from "../utils/customRequest";

const baseUrl = "https://api.themoviedb.org/3/search";

const searchMovie = async <T>(title: string): Promise<Response<T>> => {
  return get(`${baseUrl}/movie?query=${title}`);
};

const SearchService = { searchMovie };

export default SearchService;
