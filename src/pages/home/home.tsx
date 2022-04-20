import React, { useState, useEffect } from "react";
import "./home.css";
import ImageBox from "../../component/imageBox/imageBox";
import SearchLong from "../../component/searchLong/searchLong";
import SearchLang from "../../component/searchLang/searchLang";
import SearchButton from "../../component/searchButton/searchButton";
import TimeBox from "../../component/timeBox/timeBox";

function Home() {
  const [time, setTime] = useState<number>(2020);
  const [long, setLong] = useState<number>(-119.417931);
  const [lat, setLat] = useState<number>(36.778259);
  const [result, setResult] = useState<{
    url: string;
    id: string;
    msg: string;
  }>({
    url: "",
    id: "",
    msg: "",
  });

  const click = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLat(parseInt(e.target.value, 10));
  };
  const clicks = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLong(parseInt(e.target.value, 10));
  };
  const clicked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(parseInt(e.target.value, 10));
  };
  const send = async () => {
    try {
      const res = await fetch(
        `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=${time}-01-01&&dim=0.90&api_key=ug1pEcMM5MNmmRBhaNH7vMGEfUI6kuUuvmHgZQB7`
      );
      const resh = await res.json();
      setResult(resh);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    send();
  }, []);

  return (
    <div className="home__container">
      <div className="marginfive home__row ">
        <SearchLang click={click} lat={lat} />
        <SearchLong clicks={clicks} long={long} />
        <TimeBox clicked={clicked} time={time} />
        <SearchButton send={send} />
      </div>

      <div className="home__rows">
        <ImageBox result={result} />
      </div>
    </div>
  );
}

export default Home;
