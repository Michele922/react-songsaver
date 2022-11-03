import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import SongPlaylist from "./components/SongPlaylist/SongPlaylist";
import "./App.css";
import { INITIAL_SONGS } from "./helpers/constants";

function App() {
  const [songs, setSongs] = useState();

  // delete song based on title
  const deleteSong = (title) => {
    const remainingSongs = songs.filter((song) => {
      return song.title !== title;
    });
    setSongs(remainingSongs);
  };

  //add songs to localstorage on state change
  useEffect(() => {
    if (!songs) {
      setSongs(INITIAL_SONGS);
    } else {
      localStorage.setItem("songs", JSON.stringify(songs));
    }
  }, [songs]);

  //get songs from localstorage on page load
  useEffect(() => {
    if (localStorage.getItem("songs") !== "") {
      const savedSongs = JSON.parse(localStorage.getItem("songs"));
      setSongs(savedSongs);
    }
  }, []);

  return (
    <>
      <Header setSongs={setSongs} />
      <SongPlaylist data={songs} deleteSong={deleteSong} />
    </>
  );
}

export default App;
