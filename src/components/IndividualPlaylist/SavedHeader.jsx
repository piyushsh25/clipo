import { Link, useNavigate } from "react-router-dom"
import "../Playlist/NewPlaylist.css"
import "../History/History.css"
import { usePlayList } from "../../hooks/Playlist/PlaylistContext"
export function SavedHeader({ slicedLinkName }) {
    const { playlistArr, playlistName, deletePlaylist } = usePlayList()
    const navigate = useNavigate()
    //slicedlink is the pathname===playlistname ref to savedarray.jsx
    return <div className="newplaylist">
        <div className="newplaylist-header">{slicedLinkName}</div>
        <div className="newplaylist-call-to-action"><button className="button-link" onClick={() => deletePlaylist(slicedLinkName, playlistArr, playlistName,navigate)}>delete playlist</button></div>
    </div>
}