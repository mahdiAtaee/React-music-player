import React from "react";

export default function ControllButton() {
  return (
    <div id="song-controls">
      <div class="button repeat-track" onclick="repeat_track()">
        <i class="fas fa-repeat"></i>
      </div>
      <div class="button prev-btn" onclick="prev_track()">
        <i class="fas fa-backward"></i>
      </div>
      <div class="button pause-btn" onclick="playPauseTrack()">
        <i class="fas fa-play" id="play_pause"></i>
      </div>
      <div class="button next-btn" onclick="next_track()">
        <i class="fas fa-forward"></i>
      </div>
      <div class="button random-track" onclick="random_track()">
        <i class="fas fa-random" title="random"></i>
      </div>
    </div>
  );
}
