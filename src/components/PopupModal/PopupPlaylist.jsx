import "./PopupPlaylist.css"
import { AiOutlineClose } from "react-icons/ai"
import { usePlayList } from "../../hooks/Playlist/PlaylistContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"
import { NotAvailable } from "../NotAvailable/NotAvailable";
export function PopupModal({ showPlayListModal, setShowPlaylistModal, videoToSave }) {
  const { playlistName, addToPlayList } = usePlayList();
  function addButtonTrigger(video, playlist) {
    addToPlayList(video, playlist)
    setShowPlaylistModal(false)
  }
  function setPopupFalse(setShowPlaylistModal){
    setShowPlaylistModal(false)
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setPopupFalse(setShowPlaylistModal);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="title">
          <h1>Choose your playlist.</h1>
        </div>
        <div className="body">
          <div className="playlist-names">
            {playlistName.length === 0 ? <NotAvailable message={"No Playlist Available."}/> : playlistName?.map((playlist, id) => {
              return <Button key={id} onClick={() => addButtonTrigger(videoToSave, playlist)}>{playlist} ++</Button>
            })
            }
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setPopupFalse(setShowPlaylistModal);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <Link to="/playlist" onClick={()=>setPopupFalse(setShowPlaylistModal)}>
            <button>Playlists</button></Link>
        </div>
      </div>
    </div>
  );
}
