import React from "react";

export default function NowPlaying({ header }) {
  return (
    <div class="play-of">
      Now Play {header.current} Of {header.total}
    </div>
  );
}
