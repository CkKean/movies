import { FC, useEffect, useState } from "react";
import { Movie } from "../../models/movie";
import MovieService from "../../services/movie";
import { Response } from "../../models/response";
import { IMAGE_PATH_ORIGINAL } from "../../constants/imageConfiguration";
import SearchService from "../../services/search";
import Pagination from "../../components/pagination";

const CATEGORY = {
  NOW_SHOWING: "NOW_SHOWING",
  TOP_RATED: "TOP_RATED",
};

const Dashbaord: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [category, setCategory] = useState<string>(CATEGORY.NOW_SHOWING);

  const fetchMovieData = async (
    selectedCategory = category,
    pageNumber = currentPage
  ) => {
    setLoading(true);
    try {
      let data: Response<Movie[]> | null = null;
      if (selectedCategory === CATEGORY.NOW_SHOWING) {
        data = await MovieService.getNowPlaying({ pageNumber: pageNumber });
      } else {
        data = await MovieService.getTopRated({ pageNumber: pageNumber });
      }

      if (data.results && data.results.length > 0) {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } else {
        throw new Error("Request failed.");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const searchMovieData = async () => {
    setLoading(true);
    try {
      if (searchTitle !== null && searchTitle !== "") {
        let data: Response<Movie[]> = await SearchService.searchMovie(
          searchTitle
        );

        if (data.results && data.results.length > 0) {
          setMovies(data.results);
        } else {
          throw new Error("Request failed.");
        }
        console.log(data);
      } else {
        alert("Please enter the title for searching.");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const toggleCategory = (category: string) => {
    setCategory(category);
    setCurrentPage(1);
    fetchMovieData();
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <div>
      <div className="tab-bar">
        <ul className="tab-list">
          <li
            className="tab-item active"
            onClick={() => fetchMovieData(CATEGORY.NOW_SHOWING, 1)}
          >
            Now Showing
          </li>
          <li
            className="tab-item"
            onClick={() => fetchMovieData(CATEGORY.TOP_RATED, 1)}
          >
            Top Rated
          </li>
        </ul>
      </div>
      <div style={{ textAlign: "center", padding: "10px" }}>
        <input
          onChange={(event) => setSearchTitle(event.target.value)}
          style={{ borderRadius: "10px", width: "50%" }}
        />
        <button onClick={searchMovieData}>Search</button>
        <button onClick={() => fetchMovieData(CATEGORY.NOW_SHOWING, 1)}>
          Reset
        </button>
      </div>

      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <div style={{ padding: "10px" }}>
            {movies &&
              movies.length > 0 &&
              movies.map((movie) => (
                <div className="card">
                  <div className="left-column">
                    <div className="image-container">
                      <img
                        src={`${IMAGE_PATH_ORIGINAL}${movie.poster_path}`}
                        alt={movie.title}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="right-column">{movie.title}</div>
                </div>
              ))}
          </div>
          {/* <Pagination
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
            fetchMovieData={fetchMovieData}
            searchMovieData={searchMovieData}
            isSearch={false}
          /> */}
        </>
      )}
    </div>
  );
};

export default Dashbaord;
