import React from "react";
import SongForm from "../SongForm/SongForm";
import "./Header.css";

const Header = ({ setSongs }) => {
  return (
    <section className="header-container">
      <h1>Songsaver</h1>
      <SongForm setSongs={setSongs} />
    </section>
  );
};

export default Header;
