import { FC } from "react";
import Button from "./button";

interface props {
  searchTitle: string;
  disabled?: boolean;
  setSearchTitle: (title: string) => void;
  onSearch: () => void;
  onReset: () => void;
}

const SearchBar: FC<props> = ({
  searchTitle,
  setSearchTitle,
  onSearch,
  onReset,
  disabled = false,
}) => {
  return (
    <div>
      <input
        style={{ display: "inline-block", width: "50%" }}
        onChange={(event) => setSearchTitle(event.target.value)}
        value={searchTitle}
      />
      <Button
        style={{ margin: "0px 5px" }}
        type="primary"
        onClick={() => onSearch()}
      >
        Search
      </Button>
      <Button type="default" onClick={onReset}>
        Reset
      </Button>
    </div>
  );
};

export default SearchBar;
