import React from "react";

export default function SongInfo({ trackList }) {
  return (
    <div className="song-details">
      <div className="song-title">{trackList.name}</div>
      <div className="artist">{trackList.artist}</div>
    </div>
  );
}
