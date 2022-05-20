import React from "react";

export default function Thumbnail({ trackList, isPlaying }) {
  return (
    <div className="thumbnail-border">
      <img
        src={trackList.thumb}
        className={isPlaying ? "song-thumbnail rotate" : "song-thumbnail"}
      />
    </div>
  );
}
