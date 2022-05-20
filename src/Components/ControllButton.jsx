import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
  faRandom,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";

export default function ControllButton({
  handleprev,
  handleNext,
  handleRepeat,
  handlePausePlay,
  isPlaying,
  random_track,
  isRandom,
}) {
  return (
    <div id="song-controls">
      <div className="button repeat-track" onClick={handleRepeat}>
        <FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon>
      </div>
      <div className="button prev-btn" onClick={handleprev}>
        <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>
      </div>
      <div className="button pause-btn" onClick={handlePausePlay}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay}></FontAwesomeIcon>
      </div>
      <div className="button next-btn" onClick={handleNext}>
        <FontAwesomeIcon icon={faForward}></FontAwesomeIcon>
      </div>
      <div
        className={
          isRandom ? "button random-track active" : "button random-track"
        }
        onClick={random_track}
      >
        <FontAwesomeIcon icon={faRandom}></FontAwesomeIcon>
      </div>
    </div>
  );
}
