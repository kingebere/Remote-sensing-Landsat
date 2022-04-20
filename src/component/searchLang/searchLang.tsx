import React from "react";
import "./searchLang.css";

type First = {
  click: (e: React.ChangeEvent<HTMLInputElement>) => void;
  lat: number;
};

function SearchLang({ click, lat }: First): JSX.Element {
  return (
    <div className="searchL searchLang__vcd">
      <h1>Latitude</h1>
      <input type="number" value={lat} onChange={click} />
    </div>
  );
}

export default SearchLang;
