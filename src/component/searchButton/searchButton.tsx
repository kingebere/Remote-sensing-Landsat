import React from "react";
import "./searchButton.css";

type First = {
  send: () => void;
};

function SearchButton({ send }: First): JSX.Element {
  return (
    <div className="search searchLang__vcd">
      <button type="submit" onClick={send}>
        Search
      </button>
    </div>
  );
}

export default SearchButton;
