import { useEffect } from "react";
import "./PopupPlaylist.css"
import {AiOutlineClose} from "react-icons/ai"
export function PopupModal({showPlayListModal,setShowPlaylistModal}) {

    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setShowPlaylistModal(false);
              }}
            >
              <AiOutlineClose/>
            </button>
          </div>
          <div className="title">
            <h1>Choose your playlist to add.</h1>
          </div>
          <div className="body">
            <p>The next page looks amazing. Hope you want to go there!</p></div>
          <div className="footer">
            <button
              onClick={() => {
                setShowPlaylistModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button>Continue</button>
          </div>
        </div>
      </div>
    );
  }
