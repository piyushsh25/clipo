import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./hooks/CategoryFilter/FilterContext";
import { PlaylistProvider } from "./hooks/Playlist/PlaylistContext";
import { HistoryProvider } from "./hooks/History/HistoryContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <PlaylistProvider>
      <HistoryProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </HistoryProvider>
    </PlaylistProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
