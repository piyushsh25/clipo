import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { History } from "./pages/History/History";
import { HomePage } from "./pages/HomePage/HomePage";
import { Login } from "./pages/Login/Login";
import { Playlist } from "./pages/Playlist/Playlist";
import { PlayListUnique } from "./pages/IndividualPlaylist/Saved";
import { Signup } from "./pages/Signup/Signup";
import { VideoPage } from "./pages/VideoPage/VideoPage";
import { WatchLater } from "./pages/WatchLater/WatchLater";
import { CreatePlaylist } from "./pages/CreatePlayList/CreatePlaylist";
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
      <Route path="/video" element={<VideoPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/create-playlist" element={<CreatePlaylist/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
