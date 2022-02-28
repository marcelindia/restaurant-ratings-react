import React from "react";
import "./App.css";
import Restaurants from "./components/Restaurants";

function App() {
  return (
    <header style={{ textAlign: "center", fontSize: "x-large" }}>
      <ul>
        <b>Rate Your Favorites:</b>
      </ul>
      <Restaurants />
    </header>
  );
}

export default App;
