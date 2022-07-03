import "./PopupPlaylist.css"
import { AiOutlineClose } from "react-icons/ai"
import { usePlayList } from "../../hooks/Playlist/PlaylistContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"
import { useState } from "react";
export function NewPlaylistPopUp({ newPlaylistPopUp, setNewPlaylistPopUp }) {
  const { playlistName, setPlaylistName } = usePlayList()
  const [playlistEvent, setPlaylistEvent] = useState("")
  function inputNameHandler(e) {
    setPlaylistEvent(e.target.value)
  }
  function createButtonHandler() {
    let isPlaylistPresent = false
    if (playlistName.includes(playlistEvent.trim().split(" ").join(""))) {
      console.log("duplicate")
      isPlaylistPresent = true
    }
    if (!isPlaylistPresent) {
      const addPlaylistToArray = [...playlistName, playlistEvent]
      setPlaylistName(addPlaylistToArray)
      setNewPlaylistPopUp(false)
      setPlaylistEvent("")
    }
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setNewPlaylistPopUp(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="title">
          <h1>Create new playlist.</h1>
        </div>
        <div className="body">
          <div className="input-playlist-name">
            <input placeholder="new playlist" onChange={(e) => inputNameHandler(e)} />
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setNewPlaylistPopUp(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={() => createButtonHandler()}>Create</button>
        </div>
      </div>
    </div>
  );
}
