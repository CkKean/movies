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
    <div className="pagination">
      <div className="fw400">
        <strong>
          {currentPage === 1 ? 1 : itemsPerPage * (currentPage - 1) + 1} -{" "}
          {itemsPerPage * currentPage}
        </strong>{" "}
        of <strong>{totalResults}</strong> items
      </div>

      <div className="text-right">
        <span className="fw400" style={{ marginRight: "5px" }}>
          Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </span>
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
      </div>
    </div>
  );
};

export default Pagination;
