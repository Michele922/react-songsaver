import React from "react";
import SongListItem from "../SongListItem/SongListItem";
import "./SongList.css";

const SongList = ({ songs = [], deleteSong }) => {
  return (
    <table id="song-list-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => {
          return (
            <SongListItem
              key={song.title}
              song={song}
              deleteSong={deleteSong}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default SongList;
