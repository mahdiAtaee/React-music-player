import React from "react";

export default function PlaySlider() {
  return (
    <div id="time-slider">
      <div class="slider-times">
        <span class="current-time">1:21</span>
        <span class="total-duration">3:46</span>
      </div>
      <input
        type="range"
        min="1"
        max="100"
        class="slider seek-slider"
        id="myRange"
        onchange="seekTo()"
      />
    </div>
  );
}
