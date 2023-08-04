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

  const handleJumpToPage = (pageNumber: number) => {
    if (!isNaN(pageNumber) && pageNumber > 0) {
      setCurrentPage(pageNumber);
      handlePageChange(pageNumber);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <div>
        <span className="page-info">
          Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </span>
      </div>
      <div>
        <Button
          style={{ marginRight: "5px" }}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          {"<"}
        </Button>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          {">"}
        </Button>
        {/* <div style={{ display: "inline" }}>
          <span>Jump to Page:</span>
          <input
            type="number"
            value={currentPage}
            min={1}
            max={totalPages}
            onChange={(e) => handleJumpToPage(parseInt(e.target.value))}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Pagination;
