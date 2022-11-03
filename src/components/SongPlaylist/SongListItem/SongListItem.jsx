import React from "react";
import { getGenreName } from "../../../helpers/genreHelpers";
import "./SongListItem.css";

const SongListItem = ({ song, deleteSong }) => {
  return (
    <tr>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{getGenreName(song.genre)}</td>
      <td>{song.rating}</td>
      <td>
        <button onClick={() => deleteSong(song.title)}>Delete</button>
      </td>
    </tr>
  );
};

export default SongListItem;
