import React, { useState, useEffect } from "react";
import NowPlaying from "./NowPlaying";
import SongInfo from "./SongInfo";
import Thumbnail from "./Thumbnail";

export default function Details({ trackList, len, cursor, isPlaying }) {
  return (
    <div className="details">
      <NowPlaying cursor={cursor} len={len} />
      <Thumbnail trackList={trackList} isPlaying={isPlaying}/>
      <SongInfo trackList={trackList} />
    </div>
  );
}
