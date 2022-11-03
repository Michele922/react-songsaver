export const SONG_GENRES = [
  { value: 0, name: "Select a genre" },
  { value: 1, name: "Pop" },
  { value: 2, name: "Country" },
  { value: 3, name: "Reggae" },
  { value: 4, name: "Rock" },
  { value: 5, name: "Soul" },
  { value: 6, name: "Other" },
];

export const getGenreName = (genreNumber) => {
  return SONG_GENRES[genreNumber].name;
};
