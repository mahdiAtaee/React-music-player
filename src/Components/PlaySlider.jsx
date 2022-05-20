import React, { useState, useEffect, useRef } from "react";

export default function PlaySlider({ audioElement }) {
  const range = useRef(null);
  let [currTime, setCurrTime] = useState("00:00");
  let [totalTime, setTotalTime] = useState("00:00");

  useEffect(() => {
    setInterval(() => {
      const obj = setUpdate();
      if (obj !== undefined) {
        setCurrTime(obj.curr);
        setTotalTime(obj.total);
      }
    }, 1000);
  }, [currTime]);

  function seekTo() {
    audioElement.current.currentTime =
      audioElement.current.duration * (range.current.value / 100);
  }

  function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(audioElement.current.duration)) {
      seekPosition =
        audioElement.current.currentTime *
        (100 / audioElement.current.duration);
      range.current.value = seekPosition;

      let currentMinutes = Math.floor(audioElement.current.currentTime / 60);
      let currentSeconds = Math.floor(
        audioElement.current.currentTime - currentMinutes * 60
      );
      let durationMinutes = Math.floor(audioElement.current.duration / 60);
      let durationSeconds = Math.floor(
        audioElement.current.duration - durationMinutes * 60
      );

      if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
      }
      if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds;
      }
      if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
      }
      if (durationMinutes < 10) {
        durationMinutes = "0" + durationMinutes;
      }

      return {
        curr: currentMinutes + ":" + currentSeconds,
        total: durationMinutes + ":" + durationSeconds,
      };
      setCurrTime = currentMinutes + ":" + currentSeconds;
      setTotalTime = durationMinutes + ":" + durationSeconds;
    }
  }

  return (
    <div id="time-slider">
      <div className="slider-times">
        <span className="current-time">{currTime}</span>
        <span className="total-duration">{totalTime}</span>
      </div>
      <input
        type="range"
        min="1"
        max="100"
        className="slider seek-slider"
        id="myRange"
        ref={range}
        onChange={seekTo}
      />
    </div>
  );
}
