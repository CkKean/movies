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
  children?: any;
}

const MovieDetailModal: FC<props> = ({
  loading,
  movieDetail,
  show,
  onClose,
  children,
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
    <div className="modal-backdrop">
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
                  {
                    title: "Duration",
                    value: convertMinToReadableTime(movieDetail?.runtime),
                  },
                  {
                    title: "Movie Type",
                    value: movieDetail?.genres[0].name,
                  },
                  {
                    title: "Language",
                    value: movieDetail?.original_language.toUpperCase(),
                  },
                  { title: "Adult", value: movieDetail?.adult ? "Yes" : "No" },
                  { title: "Popularity", value: movieDetail?.popularity },
                  { title: "Release Date", value: movieDetail?.release_date },
                  { title: "Tagline", value: movieDetail?.tagline },
                  { title: "Vote Average", value: movieDetail?.vote_average },
                  { title: "Vote Count", value: movieDetail?.vote_count },
                ]}
              />
              <div
                style={{
                  display: "block",
                  margin: "1rem 0",
                  textAlign: "right",
                }}
              >
                <Button type="default" onClick={onClose}>
                  Close
                </Button>
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
