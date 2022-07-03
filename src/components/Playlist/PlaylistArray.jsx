import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { usePlayList } from "../../hooks/Playlist/PlaylistContext"
import { NotAvailable } from "../NotAvailable/NotAvailable";
import { NewPlaylistPopUp } from "../PopupModal/NewPlaylist";
import "./CardArray.css"
import { NewPlaylist } from "./NewPlaylist"
export function CardArray() {
    const { playlistArr, playlistName, deletePlaylist } = usePlayList();
    function getVideoLength(playlistArr, playlist) {
        return playlistArr.filter((video) => {
            return video.playlistname === playlist
        })
    }
    const navigate=useNavigate();
    const [newPlaylistPopUp, setNewPlaylistPopUp] = useState(false)
    let categorylength;
    return <div>
        <NewPlaylist newPlaylistPopUp={newPlaylistPopUp} setNewPlaylistPopUp={setNewPlaylistPopUp} />
        <div className="playlist-container">
            {playlistName.length === 0 ? <NotAvailable message={"No Playlist available."} className="playlist-name" /> :
                playlistName.map((playlist, id) => {
                    return <div className="playlist-card" key={id}>
                        <div className="playlist-name">
                            <Link to={`${playlist}`} className='playlist-card-link'><div>  {playlist} </div></Link>
                            <div>
                                {categorylength = getVideoLength(playlistArr, playlist).length}
                                {categorylength <= 1 ? " video" : " videos"}

                            </div>
                        </div>
                        <div className="playlist-trash" onClick={() =>deletePlaylist(playlist, playlistArr, playlistName,navigate)}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </div>
                    </div>
                })}
        </div>
        {newPlaylistPopUp && <NewPlaylistPopUp newPlaylistPopUp={newPlaylistPopUp} setNewPlaylistPopUp={setNewPlaylistPopUp} />}
    </div>
}