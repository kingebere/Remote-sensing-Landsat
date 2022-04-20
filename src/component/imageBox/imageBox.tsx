import React from "react";
import styles from "./imageBox.module.css";

type First = {
  result: { url: string; id: string; msg: string };
};
function ImageBox({ result }: First): JSX.Element {
  const { url, id, msg } = result;
  return (
    <div className={styles.imagebox}>
      <h1>Landsat Imagery</h1>
      <h2>
        Retrieves the data-times and asset names for the closest available
        satellite imagery
      </h2>
      <div className={styles.image__wrapper}>
        {url ? <img src={url} alt="xx" /> : <h2>{msg}</h2>}
        <p>{id}</p>
      </div>
    </div>
  );
}
export default ImageBox;
