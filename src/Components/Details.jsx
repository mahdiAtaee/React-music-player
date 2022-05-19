import React, { useState, useEffect } from "react";
import NowPlaying from "./NowPlaying";
import SongInfo from "./SongInfo";
import Thumbnail from "./Thumbnail";

export default function Details({trackList}) {
  const [header, setHeader] = useState({
    current: 0,
    total: trackList.length,
  });

  return (
    <div class="details">
      <NowPlaying header={header}/>
      <Thumbnail trackList={trackList}/>
      <SongInfo />
    </div>
  );
}
