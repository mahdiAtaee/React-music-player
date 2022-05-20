import React from "react";

export default function NowPlaying({ cursor, len }) {
  return (
    <div className="play-of">
      Now Play {cursor + 1} Of {len}
    </div>
  );
}
