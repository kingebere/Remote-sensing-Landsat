import React from "react";
import styles from "./time.module.css";

type First = {
  clicked: (e: React.ChangeEvent<HTMLInputElement>) => void;
  time: number;
};

function TimeBox({ clicked, time }: First): JSX.Element {
  return (
    <div className={`${styles.searchLang__col} ${styles.searchLang__vcd}`}>
      <h1>Year</h1>
      <input type="number" value={time} onChange={clicked} />;
    </div>
  );
}

export default TimeBox;
