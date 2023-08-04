import { FC } from "react";
import { IMAGE_PATH_ORIGINAL } from "../constants/imageConfiguration";
import { MovieDetail } from "../models/movieDetail";
import Button from "./button";
import Skeleton from "./skeleton";
import Table from "./table";

interface props {
  loading: boolean;
  movieDetail?: MovieDetail | null;
  show: boolean;
  onClose: () => void;
}

const MovieDetailModal: FC<props> = ({
  loading,
  movieDetail,
  show,
  onClose,
}) => {
  if (!show) {
    return null;
  }

  const convertMinToReadableTime = (runtime: number) => {
    if (runtime < 60) {
      return runtime + "mins";
    } else {
      const hours = Math.floor(runtime / 60);
      const mins = runtime % 60;
      return hours + " hour " + mins + " mins";
    }
  };

  return (
    <div className="modal modal-backdrop">
      <div
        className={`modal-container modal-default ${
          loading ? "modal-loading" : ""
        }`}
      >
        {loading ? (
          <>
            <div className="modal-header" style={{ marginBottom: "1rem" }}>
              <div
                className="close-icon close-icon-loading"
                onClick={onClose}
              ></div>
            </div>
            <div className="modal-content">
              <Skeleton />
            </div>
          </>
        ) : (
          movieDetail !== null &&
          movieDetail !== undefined && (
            <>
              <div
                className="modal-header"
                style={{
                  backgroundImage: `url(${IMAGE_PATH_ORIGINAL}${movieDetail.backdrop_path})`,
                }}
              >
                <div className="close-icon" onClick={onClose}></div>
              </div>

              <div className="modal-content">
                <div
                  className="text-center "
                  style={{
                    fontSize: "2rem",
                  }}
                >
                  <b>{movieDetail.title}</b>
                </div>

                <Table
                  items={[
                    { title: "Overview", value: movieDetail?.overview },
                    { title: "Tagline", value: movieDetail?.tagline || "-" },
                    {
                      title: "Duration",
                      value: convertMinToReadableTime(movieDetail?.runtime),
                    },
                    {
                      title: "Movie Type",
                      value:
                        movieDetail?.genres.length > 0
                          ? movieDetail?.genres[0].name
                          : "-",
                    },
                    {
                      title: "Original Language",
                      value: movieDetail?.original_language,
                    },
                    {
                      title: "Spoken Language",
                      value:
                        movieDetail?.spoken_languages.length > 0
                          ? movieDetail?.spoken_languages[0]?.english_name
                          : "-",
                    },
                    { title: "Status", value: movieDetail?.status },
                    { title: "Release Date", value: movieDetail?.release_date },
                    {
                      title: "Above 18",
                      value: movieDetail?.adult ? (
                        <span className="success-color">✔</span>
                      ) : (
                        <span className="danger-color">✗</span>
                      ),
                    },
                    { title: "Popularity", value: movieDetail?.popularity },
                    { title: "Vote Average", value: movieDetail?.vote_average },
                    { title: "Vote Count", value: movieDetail?.vote_count },
                    {
                      title: "Website ",
                      value: movieDetail?.homepage ? (
                        <a
                          href={movieDetail?.homepage}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {movieDetail?.homepage}
                        </a>
                      ) : (
                        "-"
                      ),
                    },
                  ]}
                />
                <div className="modal-button">
                  <Button onClick={onClose}>Close</Button>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default MovieDetailModal;
