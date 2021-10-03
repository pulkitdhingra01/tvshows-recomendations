import React, { useState } from "react";
import "./styles.css";

const showsdb = {
  Thriller: [
    { name: "The Vampire Diaries", rating: "4.5/5" },
    { name: "Supernaturals", rating: "4/5" },
    { name: "The Originals", rating: "4.5/5" },
    { name: "Breaking Bad", rating: "5/5" }
  ],
  Comedy: [
    { name: "The Office", rating: "4/5" },
    { name: "Upload", rating: "3/5" },
    { name: "Friends", rating: "4/5" },
    { name: "God Friended Me", rating: "3.5/5" }
  ],
  Superhero: [
    { name: "The Flash", rating: "5/5" },
    { name: "The Arrow", rating: "4.5/5" },
    { name: "Constantine", rating: "3.5/5" },
    { name: "Supergirl", rating: "4/5" }
  ],
  Anime: [
    { name: "Naruto", rating: "5/5" },
    { name: "DeathNote", rating: "4.5/5" },
    { name: "One Piece", rating: "5/5" },
    { name: "Tokyo Ghoul", rating: "4.5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Anime");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎞T.V Shows</h1>
      <h3>Check out my favourite TV Shows. Select a genre to start!!</h3>
      <div>
        {Object.keys(showsdb).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              padding: "1rem 2rem",
              borderRadius: "0.3rem",
              border: "1px solid red",
              fontSize: "1rem",
              margin: "1rem 0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr></hr>
      <div className="result">
        <ul style={{ paddingInlineStart: "0" }}>
          {showsdb[selectedGenre].map((shows) => (
            <li
              key={shows.name}
              style={{
                listStyle: "none",
                padding: "0.7rem",
                border: "1px solid blue",
                width: "50%",
                margin: "auto",
                borderRadius: "0.5rem",
                marginBottom: "1rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {shows.name} </div>
              <div style={{ fontSize: "smaller" }}> {shows.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
