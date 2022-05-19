import React, { useState, useEffect } from "react";
import ControllButton from "./ControllButton";
import Details from "./Details";
import PlaySlider from "./PlaySlider";

export default function Player() {
  const [trackList, setTrackList] = useState([
    {
      thumb: "../media/nasa.jpg",
      name: "Nasa",
      artist: "putak-leito-Tik Taak sr",
      music: "../media/NASA.mp3",
    },
    {
      thumb: "../media/maroochia.jpg",
      name: "Maroochia",
      artist: "Koroush",
      music: "../media/07_Maroochia_Ft_Sepehr_Khalse_&.mp3",
    },
    {
      thumb: "../media/sholTekon.jpg",
      name: "Shol Tekon",
      artist: "Sepehr Khalse Ft Tik Taak",
      music: "../media/Sepehr Khalse Ft Tik Taak - Shol Tekoon.mp3",
    },
  ]);

  return (
    <div class="wrapper">
      <Details trackList={trackList}/>
      <PlaySlider />
      <ControllButton />
    </div>
  );
}
