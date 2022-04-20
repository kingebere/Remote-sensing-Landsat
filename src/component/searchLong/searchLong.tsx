import React from "react";
import "./searchLong.css";

type First = {
  clicks: (e: React.ChangeEvent<HTMLInputElement>) => void;
  long: number;
};

function SearchLong({ clicks, long }: First): JSX.Element {
  return (
    <div className="searchLang__col searchLang__vcd">
      <h1>Longitude</h1>
      <input type="text" value={long} onChange={clicks} />
    </div>
  );
}

export default SearchLong;
