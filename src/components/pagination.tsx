import { FC, useState } from "react";

interface props {
  totalPages: number;
  isSearch: boolean;
  itemsPerPage?: number;
  setCurrentPage: (pageNumber: number) => void;
  fetchMovieData: () => void;
  searchMovieData: () => void;
}

const Pagination: FC<props> = ({
  isSearch = false,
  totalPages = 0,
  itemsPerPage = 20,
  setCurrentPage,
  searchMovieData,
  fetchMovieData,
}) => {
  const [activePage, setActivePage] = useState(1);

  const handleNextPage = () => {
    const targetPage = activePage + 1;
    setActivePage(targetPage);
    setCurrentPage(targetPage);
    if (!isSearch) {
      fetchMovieData();
    } else {
      searchMovieData();
    }
  };

  const handlePreviousPage = () => {
    const targetPage = activePage - 1;
    setActivePage(targetPage);
    setCurrentPage(targetPage);
    if (!isSearch) {
      fetchMovieData();
    } else {
      searchMovieData();
    }
  };

  //   const handleJumpToPage = (pageNumber: number) => {
  //     setCurrentPage(pageNumber);
  //     setActivePage(pageNumber);
  //   };

  //   const startIndex = (activePage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   //   const currentItems = data.slice(startIndex, endIndex);

  return (
    <div>
      <button onClick={handlePreviousPage} disabled={activePage === 1}>
        Previous
      </button>
      {/* {[...Array(totalPages).keys()].map(
        (pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleJumpToPage(pageNumber + 1)}
            disabled={currentPage === pageNumber + 1}
          >
            {pageNumber + 1}
          </button>
        )
      )} */}
      <button onClick={handleNextPage} disabled={activePage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
