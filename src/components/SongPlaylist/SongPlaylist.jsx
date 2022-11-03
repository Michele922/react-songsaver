import React, { useEffect, useState } from "react";
import { SONG_GENRES } from "../../helpers/genreHelpers";
import SongList from "./SongList/SongList";
import "./SongPlaylist.css";

const SongPlaylist = ({ data, deleteSong }) => {
  const [songs, setSongs] = useState([]);
  const [genreFilter, setGenreFilter] = useState(null);
  const [ratingFilter, setRatingFilter] = useState(null);

  useEffect(() => {
    setSongs(data);
  }, [data]);

  useEffect(() => {
    const filteredSongs = data?.filter((song) => {
      const genre = genreFilter || song.genre;
      const rating = ratingFilter || song.rating;
      return song.genre === genre && song.rating === rating;
    });

    setSongs(filteredSongs);
  }, [ratingFilter, genreFilter, data]);

  const onFilterGenre = (event) => {
    const selectedGenre = event.target.value;

    if (selectedGenre === "0") {
      setGenreFilter(null);
    } else {
      setGenreFilter(selectedGenre);
    }
  };

  const onFilterRating = (event) => {
    const selectedRating = event.target.value;

    if (selectedRating === "0") {
      setRatingFilter(null);
    } else {
      setRatingFilter(selectedRating);
    }
  };

  return (
    <div className="song-playlist-container">
      <h1>Playlist</h1>

      <div>
        <h3>Filters</h3>
        <label htmlFor="genre">Genre</label>
        <select name="genre" onChange={onFilterGenre}>
          {SONG_GENRES.map((genre) => {
            return (
              <option key={genre.value} value={genre.value}>
                {genre.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="rating">Rating</label>
        <select name="rating" onChange={onFilterRating}>
          <option value={0}>Choose a Rating</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>

      <SongList songs={songs} deleteSong={deleteSong} />
    </div>
  );
};

export default SongPlaylist;
