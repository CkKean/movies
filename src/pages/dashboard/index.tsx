import { FC, useEffect, useMemo, useState } from "react";
import { Movie } from "../../models/movie";
import MovieService from "../../services/movie";
import { Response } from "../../models/response";
import { IMAGE_PATH_ORIGINAL } from "../../constants/imageConfiguration";
import SearchService from "../../services/search";
import Pagination from "../../components/pagination";
import Modal from "../../components/modal";
import Spinner from "../../components/spinner";
import Tabs from "../../components/tabs";
import SearchBar from "../../components/searchBar";
import { MovieDetail } from "../../models/movieDetail";
import { useDeviceType } from "../../utils/useDeviceType";
import Table from "../../components/table";

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

  const fetchMovieData = async ({
    selectedCategory = category,
    pageNumber = currentPage,
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
  };

  const searchMovieData = async (pageNumber = 1) => {
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
  };

  const handlePageChange = (pageNumber: number) => {
    if (isSearch) {
      searchMovieData(pageNumber);
    } else {
      fetchMovieData({ pageNumber });
    }
  };

  const handleReset = () => {
    setCurrentPage(1);
    setSearchTitle("");
    fetchMovieData({
      selectedCategory: CATEGORY.NOW_SHOWING,
      pageNumber: 1,
    });
  };

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
          <Modal
            title={movieDetail?.title}
            show={showDetail}
            onClose={() => setShowDetail(false)}
          >
            <Table
              items={[{ title: "Overview", value: movieDetail?.overview }]}
            />
          </Modal>

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
                  className="card"
                  onClick={() => {
                    handleOnSelectMovie(movie.id);
                  }}
                >
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
                    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                      {movie.title}
                    </div>
                    <p>{movie.overview}</p>
                    <div>
                      <p>Popularity: {movie.popularity}</p>
                      <p>Vote Average: {movie.vote_average}</p>
                      <p>Vote Countt: {movie.vote_count}</p>
                      <p>Language: {movie.original_language}</p>
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
