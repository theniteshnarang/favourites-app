import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let lists = {
    books: {
      selfhelp: [
        { name: "Deep Work", rating: "5/5" },
        { name: "Atomic Habits", rating: "5/5" },
        { name: "Ego is the Enemy", rating: "3/5" },
        { name: "So Good They Can't Ignore You", rating: "4/5" }
      ],
      business: [{ name: "Rework", rating: "3.5/5" }],
      startup: [
        { name: "Zero to One", rating: "4.5/5" },
        { name: "Pyjama Profit", rating: "4/5" }
      ]
    },
    programming: {
      javascript: [
        { name: "Eloqeunt Javascript", rating: "5/5" },
        { name: "FreeCodeCamp", rating: "4/5" },
        { name: "MDN Docs", rating: "4.5/5" }
      ],
      react: [
        { name: "React Docs", rating: "4.5/5" },
        { name: "FreeCodeCamp", rating: "4/5" }
      ],
      css: [
        { name: "Practise", rating: "5/5" },
        { name: "Dev Ed Youtube Channel", rating: "4/5" }
      ]
    },
    entertainment: {
      movies: [
        { name: "K.G.F", rating: "4.5/5" },
        { name: "Die Hard 1998", rating: "4/5" }
      ],
      webseries: [
        { name: "Young Sheldon", rating: "5/5" },
        { name: "Mirzapur", rating: "5/5" },
        { name: "Four More Shots Please", rating: "4/5" }
      ],
      sitcoms: [
        { name: "Friends", rating: "5/5" },
        { name: "How I Met Your Mother", rating: "5/5" },
        { name: "Brooklyn Nine Nine", rating: "4/5" },
        { name: "Big Bang Theory", rating: "4/5" }
      ]
    },
    food: {
      italian: [{ name: "Pizza", rating: "4/5" }],
      Mughlai: [
        { name: "Chicken Biryani", rating: "5/5" },
        { name: "Chicken Tikka", rating: "4/5" },
        { name: "Chicken Shawrma", rating: "4.5/5" }
      ]
    }
  };

  const [genre, setGenre] = useState("books");
  const [subGenre, setSubGenre] = useState("");

  function selectedGenre(item) {
    setGenre(item);
    console.log(typeof item);
  }

  function selectedSubGenre(item) {
    setSubGenre(item);
    console.log(typeof item);
  }
  console.log(lists["programming"]["javascript"][1]);
  return (
    <div className="App">
      <h1>
        <span role="img">📝</span> Favourites App
      </h1>
      <p> Choose the genre to get Started</p>
      <div>
        {Object.keys(lists).map((genre) => (
          <button onClick={() => selectedGenre(genre)}> {genre} </button>
        ))}
      </div>
      <hr />
      <div>
        {Object.keys(lists[genre]).map((subGenre) => (
          <button onClick={() => selectedSubGenre(subGenre)}>{subGenre}</button>
        ))}
      </div>
      <div>
        {/* Yet to finish */}

        {lists[genre][subGenre]?.map((item) => {
          return (
            <div style={{ margin: "1rem" }}>
              <strong>Name: </strong>
              <span style={{ marginRight: "0.8rem" }}>{item.name}</span>
              <strong>Rating: </strong>
              {item.rating}
            </div>
          );
        })}
      </div>
    </div>
    // Things to do:
    // 2) Print the list on view (consume the state)
  );
}
