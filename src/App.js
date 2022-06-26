import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { History } from "./pages/History/History";
import { HomePage } from "./pages/HomePage/HomePage";
import { Playlist } from "./pages/Playlist/Playlist";
import { PlayListUnique } from "./pages/Saved/Saved";
import { VideoPage } from "./pages/VideoPage/VideoPage";
import { WatchLater } from "./pages/WatchLater/WatchLater";
function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/playlist" element={<Playlist/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/watchlater" element={<WatchLater/>}/>
      {/* unique route later */}
      <Route path="playlist1" element={<PlayListUnique/>}/>
      {/* unique id for video */}
      <Route path="video" element={<VideoPage/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
