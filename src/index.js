import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./hooks/CategoryFilter/FilterContext";
import { PlaylistProvider } from "./hooks/Playlist/PlaylistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <PlaylistProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </PlaylistProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
