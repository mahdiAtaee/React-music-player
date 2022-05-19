import React from "react";

export default function Thumbnail({ trackList }) {
  return (
    <div class="thumbnail-border">
      <img src={trackList[0].thumb} class="song-thumbnail" />
    </div>
  );
}
