import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import MovieDetailModal from "../../components/movieDetailModal";
import Pagination from "../../components/pagination";
import SearchBar from "../../components/searchBar";
import Spinner from "../../components/spinner";
import Tabs from "../../components/tabs";
import { IMAGE_PATH_ORIGINAL } from "../../constants/imageConfiguration";
import { Movie } from "../../models/movie";
import { MovieDetail } from "../../models/movieDetail";
import { Response } from "../../models/response";
import MovieService from "../../services/movie";
import SearchService from "../../services/search";
import { useDeviceType } from "../../utils/useDeviceType";
import { isNullOrUndefined } from "../../utils/validationHelper";
import Message from "../../components/message";
import Button from "../../components/button";
import ToTopButton from "../../components/toTopButton";

const CATEGORY = {
  NOW_SHOWING: "NOW_SHOWING",
  TOP_RATED: "TOP_RATED",
};

const Dashbaord: FC = () => {
  let movieTitleSearch = useRef<string>("");
  const { isMobile } = useDeviceType();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [category, setCategory] = useState<string>(CATEGORY.NOW_SHOWING);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const [detailLoading, setDetailLoading] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null);
  const [showError, setShowError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchMovieData = useCallback(
    async ({
      selectedCategory = CATEGORY.NOW_SHOWING,
      pageNumber = 1,
    }: {
      selectedCategory?: string;
      pageNumber?: number;
    }) => {
      setLoading(true);
      setIsSearch(false);
      setCategory(selectedCategory);
      setCurrentPage(pageNumber);
      try {
        let data: Response<Movie[]> | null = null;
        if (selectedCategory === CATEGORY.NOW_SHOWING) {
          data = await MovieService.getNowPlaying({ pageNumber: pageNumber });
        } else {
          data = await MovieService.getTopRated({ pageNumber: pageNumber });
        }

        if (data && data.results) {
          setMovies(data.results);
          setTotalPages(data.total_pages);
          setTotalResults(data.total_results);
        }
      } catch (error) {
        setError("Network issue. Please reload the page and try again.");
        setMovies([]);
        setTotalPages(0);
        setTotalResults(0);
        setShowError(true);
        console.log(error);
      }
      setLoading(false);
    },
    []
  );

  const searchMovieData = useCallback(
    async (pageNumber = 1, isPageChanged = false) => {
      try {
        setLoading(true);
        setIsSearch(true);
        setCurrentPage(pageNumber);

        if (!isNullOrUndefined(searchTitle)) {
          movieTitleSearch.current = searchTitle;
        }

        // Search ""
        if (isNullOrUndefined(searchTitle) && !isPageChanged) {
          fetchMovieData({});
        } else {
          const data: Response<Movie[]> = await SearchService.searchMovie(
            movieTitleSearch.current,
            pageNumber
          );

          if (data && data.results) {
            setMovies(data.results);
            setTotalPages(data.total_pages);
            setTotalResults(data.total_results);
          }
        }
      } catch (error) {
        setError("Network issue. Please reload the page and try again.");
        setShowError(true);
        setMovies([]);
        setTotalPages(0);
        setTotalResults(0);
        console.log(error);
      }
      setLoading(false);
    },
    [fetchMovieData, searchTitle]
  );

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      if (isSearch) {
        searchMovieData(pageNumber, currentPage !== pageNumber);
      } else {
        fetchMovieData({ pageNumber });
      }
    },
    [currentPage, fetchMovieData, isSearch, searchMovieData]
  );

  const handleReset = useCallback(() => {
    setSearchTitle("");
    movieTitleSearch.current = "";
    fetchMovieData({
      selectedCategory: CATEGORY.NOW_SHOWING,
      pageNumber: 1,
    });
  }, [fetchMovieData]);

  const handleOnSelectMovie = async (movieID: number) => {
    setDetailLoading(true);
    try {
      const data: MovieDetail = await MovieService.getDetails(movieID);

      if (data) {
        setMovieDetail(data);
        setShowDetail(true);
      } else {
        setShowError(true);
        setError("Retrieve movie detail failed. Please try again.");
      }
    } catch (error) {
      setShowError(true);
      setError("Network issue. Please reload the page and try again.");
    }
    setDetailLoading(false);
  };

  const tabsComponent = useMemo(
    () => (
      <Tabs
        items={[
          {
            active: category === CATEGORY.NOW_SHOWING,
            title: "Now Showing",
            onClick() {
              fetchMovieData({
                selectedCategory: CATEGORY.NOW_SHOWING,
                pageNumber: 1,
              });
            },
          },
          {
            active: category === CATEGORY.TOP_RATED,
            title: "Top Rated",
            onClick() {
              fetchMovieData({
                selectedCategory: CATEGORY.TOP_RATED,
                pageNumber: 1,
              });
            },
          },
        ]}
      />
    ),
    [category, fetchMovieData]
  );

  const searchBar = useMemo(
    () => (
      <div style={{ textAlign: "center", padding: "10px" }}>
        <SearchBar
          disabled={loading}
          onReset={handleReset}
          onSearch={searchMovieData}
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
        />
      </div>
    ),
    [handleReset, loading, searchMovieData, searchTitle]
  );

  const pagination = useMemo(
    () => (
      <Pagination
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        totalResults={totalResults}
        setCurrentPage={setCurrentPage}
        handlePageChange={handlePageChange}
      />
    ),
    [currentPage, handlePageChange, itemsPerPage, totalPages, totalResults]
  );

  useEffect(() => {
    fetchMovieData({});
  }, []);

  return (
    <div>
      <div className="header">
        <h1 className="title">Jom Movie!</h1>
      </div>

      {tabsComponent}
      {searchBar}

      {loading ? (
        <Spinner />
      ) : (
        <>
          <div style={{ padding: "10px", margin: "10px 10%" }}>
            {movies && movies.length > 0 ? (
              <>
                {pagination}
                {movies.map((movie) => (
                  <div
                    key={movie.id}
                    className="card"
                    onClick={() => {
                      handleOnSelectMovie(movie.id);
                    }}
                  >
                    <div className="hover-text">
                      <Button type={"default"}>Movie Info</Button>
                    </div>

                    <div className="left-column">
                      <div
                        className="image-container"
                        style={{ width: isMobile ? "100%" : "150px" }}
                      >
                        <img
                          src={`${IMAGE_PATH_ORIGINAL}${movie.poster_path}`}
                          alt={movie.title}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="right-column">
                      <div
                        style={{
                          fontSize: "30px",
                          fontWeight: "600",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                          letterSpacing: "2px",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        {movie.title}
                      </div>
                      <div
                        style={{
                          padding: "1rem 0",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        Description: {movie.overview}
                      </div>
                      <div style={{ fontSize: "16px", fontWeight: "600" }}>
                        <p>Language: {movie.original_language}</p>
                        <p>Release Date: {movie.release_date}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {pagination}
              </>
            ) : (
              <div className="no-data-shown">
                No Data Shown
                {movieTitleSearch.current !== "" &&
                  ` with "${movieTitleSearch.current}"`}
              </div>
            )}
          </div>
        </>
      )}
      <MovieDetailModal
        loading={detailLoading}
        movieDetail={movieDetail}
        show={showDetail}
        onClose={() => setShowDetail(false)}
      />

      <Message
        type="error"
        title={error}
        onClose={() => {
          setShowError(false);
          setError("");
        }}
        show={showError}
      />
      <ToTopButton />
    </div>
  );
};

export default Dashbaord;
