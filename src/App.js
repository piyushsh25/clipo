import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { History } from "./pages/History/History";
import { HomePage } from "./pages/HomePage/HomePage";
import { Playlist } from "./pages/Playlist/Playlist";
function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/playlist" element={<Playlist/>}/>
      <Route path="/history" element={<History/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
