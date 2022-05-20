import React, { useState, useEffect, useRef } from "react";
import ControllButton from "./ControllButton";
import Details from "./Details";
import PlaySlider from "./PlaySlider";

export default function Player() {
  const audioElement = useRef(0);
  const [trackList, setTrackList] = useState([
    {
      thumb: "",
      name: "",
      artist: "",
      music: "",
    },
  ]);
  const [cursor, setCursor] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRandom, setIsRandom] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/trackList")
      .then((response) => response.json())
      .then((tracks) => setTrackList(tracks));
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
    audioElement.current.addEventListener("ended", handleNext);
  });

  function handleNext() {
    if (!isRandom) {
      const curr = cursor + 1 < trackList.length ? cursor + 1 : 0;
      setCursor(curr);
    } else {
      setCursor(Math.floor(Math.random() * trackList.length));
    }
  }

  function handleprev() {
    const curr = cursor - 1 < 0 ? trackList.length - 1 : cursor - 1;
    setCursor(curr);
  }

  function handleRepeat(e) {
    audioElement.current.currentTime = 0;
    setIsPlaying(true);
  }

  function handlePausePlay() {
    isPlaying ? setIsPlaying(false) : setIsPlaying(true);
  }

  function random_track() {
    setIsRandom(!isRandom);
    setCursor(Math.floor(Math.random() * trackList.length));
  }

  return (
    <>
      <div className="wrapper">
        <Details
          trackList={trackList[cursor]}
          cursor={cursor}
          len={trackList.length}
          isPlaying={isPlaying}
        />
        <PlaySlider audioElement={audioElement} />
        <ControllButton
          handleprev={handleprev}
          handleNext={handleNext}
          handleRepeat={handleRepeat}
          handlePausePlay={handlePausePlay}
          isPlaying={isPlaying}
          random_track={random_track}
          isRandom={isRandom}
          icon={isPlaying ? "fas fa-pause" : "fas fa-play"}
        />
      </div>
      <audio
        src={`${trackList[cursor].music}`}
        ref={audioElement}
        className="music"
      ></audio>
    </>
  );
}
