import { FC } from "react";
import { MovieDetail } from "../models/movieDetail";
import Button from "./button";
import Table from "./table";
import { IMAGE_PATH_ORIGINAL } from "../constants/imageConfiguration";
import Spinner from "./spinner";

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
      <div className="modal-container modal-default">
        {loading ? (
          <Spinner />
        ) : movieDetail !== null && movieDetail !== undefined ? (
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
                style={{
                  fontSize: "2rem",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {movieDetail.title}
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
                    value: movieDetail?.genres[0].name,
                  },
                  {
                    title: "Original Language",
                    value: movieDetail?.original_language,
                  },
                  {
                    title: "Spoken Language",
                    value: movieDetail?.spoken_languages[0].english_name,
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
              <div
                style={{
                  display: "block",
                  margin: "1rem 0",
                  textAlign: "center",
                }}
              >
                <Button onClick={onClose}>Close</Button>
              </div>
            </div>
          </>
        ) : (
          "Retrieve Movie Detail Failed"
        )}
      </div>
    </div>
  );
};

export default MovieDetailModal;
