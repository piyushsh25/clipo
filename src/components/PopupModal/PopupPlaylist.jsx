import "./PopupPlaylist.css"
import { AiOutlineClose } from "react-icons/ai"
import { usePlayList } from "../../hooks/Playlist/PlaylistContext";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap"
export function PopupModal({ showPlayListModal, setShowPlaylistModal ,videoToSave}) {
  const { playlistName,addToPlayList } = usePlayList();
  function addButtonTrigger(video,playlist){
    addToPlayList(video,playlist)
    setShowPlaylistModal(false)
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setShowPlaylistModal(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="title">
          <h1>Choose your playlist to add.</h1>
        </div>
        <div className="body">
          <div className="playlist-names">
            {playlistName.map((playlist, id) => {
              return <Button key={id} onClick={()=>addButtonTrigger(videoToSave,playlist)}>{playlist}</Button>
            })}
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setShowPlaylistModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Create Playlist</button>
        </div>
      </div>
    </div>
  );
}
