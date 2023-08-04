import { FC, useCallback, useEffect, useMemo, useState } from "react";
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

const CATEGORY = {
  NOW_SHOWING: "NOW_SHOWING",
  TOP_RATED: "TOP_RATED",
};

const Dashbaord: FC = () => {
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
      try {
        let data: Response<Movie[]> | null = null;
        if (selectedCategory === CATEGORY.NOW_SHOWING) {
          data = await MovieService.getNowPlaying({ pageNumber: pageNumber });
        } else {
          data = await MovieService.getTopRated({ pageNumber: pageNumber });
        }

        if (data && data.results && data.results.length > 0) {
          setMovies(data.results);
          setTotalPages(data.total_pages);
          setTotalResults(data.total_results);
        } else {
          throw new Error("Request failed.");
        }

        console.log(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    },
    []
  );

  const searchMovieData = useCallback(
    async (pageNumber = 1) => {
      setLoading(true);
      setIsSearch(true);

      try {
        if (searchTitle !== null && searchTitle !== "") {
          let data: Response<Movie[]> = await SearchService.searchMovie(
            searchTitle,
            pageNumber
          );

          if (data && data.results && data.results.length > 0) {
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
    },
    [searchTitle]
  );

  const handlePageChange = (pageNumber: number) => {
    if (isSearch) {
      searchMovieData(pageNumber);
    } else {
      fetchMovieData({ pageNumber });
    }
  };

  const handleReset = useCallback(() => {
    setCurrentPage(1);
    setSearchTitle("");
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
        throw new Error("Retrieve movie detail failed. Please try again.");
      }
    } catch (error) {
      alert(error);
      setShowDetail(false);
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

  useEffect(() => {
    fetchMovieData({});
  }, []);

  return (
    <div>
      {tabsComponent}
      {searchBar}

      {loading ? (
        <Spinner />
      ) : (
        <>
          <MovieDetailModal
            loading={detailLoading}
            movieDetail={movieDetail}
            show={showDetail}
            onClose={() => setShowDetail(false)}
          />

          <div style={{ padding: "10px", margin: "10px 10%" }}>
            <Pagination
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              totalPages={totalPages}
              totalResults={totalResults}
              setCurrentPage={setCurrentPage}
              handlePageChange={handlePageChange}
            />
            {movies &&
              movies.length > 0 &&
              movies.map((movie) => (
                <div
                  key={movie.id}
                  className="card"
                  onClick={() => {
                    handleOnSelectMovie(movie.id);
                  }}
                >
                  <div className="hover-text">
                    {isMobile ? "Tap" : "Click"} me for more details
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
                    <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                      {movie.title}
                    </div>
                    <div
                      style={{
                        padding: "1rem 0",
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >
                      {movie.overview}
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>
                      <p>Language: {movie.original_language.toUpperCase()}</p>
                      <p>Release Date: {movie.release_date}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashbaord;
