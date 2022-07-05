import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./hooks/CategoryFilter/FilterContext";
import { PlaylistProvider } from "./hooks/Playlist/PlaylistContext";
import { HistoryProvider } from "./hooks/History/HistoryContext";
import { WatchProvider } from "./hooks/WatchLater/WatchContext";
import { LikedProvider } from "./hooks/LikedVideo/LikedContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <PlaylistProvider>
      <WatchProvider>
        <LikedProvider>
          <HistoryProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </HistoryProvider>
        </LikedProvider>
      </WatchProvider>
    </PlaylistProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
