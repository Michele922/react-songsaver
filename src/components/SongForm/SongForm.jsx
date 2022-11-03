import React from "react";
import { useState } from "react";
import { SONG_GENRES } from "../../helpers/genreHelpers";
import "./SongForm.css";

const INITIAL_FORM_STATE = {
  title: "",
  artist: "",
  genre: 0,
  rating: 0,
};

const SongForm = ({ setSongs }) => {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  const onInput = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSongs((prevState) => [...prevState, formState]);
    setFormState(INITIAL_FORM_STATE);
  };

  const resetForm = (event) => {
    event.preventDefault();
    setFormState(INITIAL_FORM_STATE);
  };

  return (
    <div className="songForm">
      <form className="songs-input" onSubmit={onSubmit}>
        <div className="form-input">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={formState.title}
            className="input"
            onChange={onInput}
            autoFocus
          />
        </div>

        <div className="form-input">
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            name="artist"
            value={formState.artist}
            className="input"
            onChange={onInput}
          />
        </div>

        <div className="form-input">
          <label htmlFor="genre">Genre</label>
          <select name="genre" onChange={onInput} value={formState.genre}>
            {SONG_GENRES.map((genre) => {
              return (
                <option key={genre.value} value={genre.value}>
                  {genre.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-input">
          <label htmlFor="rating">Rating</label>
          <select name="rating" onChange={onInput} value={formState.rating}>
            <option value={0}>Choose Rating</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div className="form-input">
          <button className="button-clear-input" onClick={resetForm}>
            Clear
          </button>
        </div>

        <div className="form-input">
          <button className="button-new-input" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default SongForm;
