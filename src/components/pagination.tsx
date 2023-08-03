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
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </Button>
      <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </Button>
      <Button key={totalPages} onClick={() => handleJumpToPage(totalPages)}>
        {totalPages}
      </Button>
      {currentPage === 1 ? 1 : itemsPerPage * (currentPage - 1) + 1} -{" "}
      {itemsPerPage * currentPage} of {totalResults}
    </div>
  );
};

export default Pagination;
