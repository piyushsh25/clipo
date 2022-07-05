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
import { Error } from "./pages/ErrorPage/Error";
import { Liked } from "./pages/Liked/Liked";
import { RequiresAuth } from "./hooks/Auth/RequiresAuth";
import { RedirectRoute } from "./hooks/Auth/RedirectRoute";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* needs authentication */}
          <Route element={<RequiresAuth/>}>
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/history" element={<History />} />
            <Route path="/watchlater" element={<WatchLater />} />
            {/* unique route later */}
            <Route path="/playlist/:category" element={<PlayListUnique />} />
            <Route path="/liked" element={<Liked />} />
          </Route>
          {/* unique id for video */}
          <Route path="/video/:videoId" element={<VideoPage />} />
          {/* redirect if authentication already present */}
          <Route element={<RedirectRoute/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
