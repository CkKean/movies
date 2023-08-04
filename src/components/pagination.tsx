import { FC } from "react";
import Button from "./button";

interface props {
  currentPage: number;
  itemsPerPage?: number;
  totalPages: number;
  totalResults: number;
  setCurrentPage: (pageNumber: number) => void;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination: FC<props> = ({
  currentPage,
  itemsPerPage = 20,
  totalPages = 0,
  totalResults = 0,
  handlePageChange,
  setCurrentPage,
}) => {
  const handleNextPage = () => {
    const targetPage = currentPage + 1;
    setCurrentPage(targetPage);
    handlePageChange(targetPage);
  };

  const handlePreviousPage = () => {
    const targetPage = currentPage - 1;
    setCurrentPage(targetPage);
    handlePageChange(targetPage);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* <div>
        <b>Sort By:</b>{" "}
        <select>
          <option>
            Release Date Ascending<div className="arrow-up"></div>
            <div className="arrow-down"></div>
          </option>
          <option>Release Date Descending</option>
          <option>Popularity Ascending</option>
          <option>Popularity Descending</option>
          <option>Vote Count Ascending</option>
          <option>Vote Count Descending</option>
        </select>
      </div> */}

      <div style={{ fontWeight: 400 }}>
        {currentPage === 1 ? 1 : itemsPerPage * (currentPage - 1) + 1} -{" "}
        {itemsPerPage * currentPage} of {totalResults} items
      </div>

      <div style={{ textAlign: "right" }}>
        <span className="page-info" style={{ marginRight: "5px" }}>
          Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </span>
        <div className="button-group">
          <Button
            style={{ marginRight: "5px" }}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            {"<"}
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            {">"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
