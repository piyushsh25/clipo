import {Link} from "react-router-dom"
import "../Playlist/NewPlaylist.css"
import "../History/History.css"
export function SavedHeader({slicedLink}){
    //slicedlink is the pathname===playlistname ref to savedarray.jsx
    return <div className="newplaylist">
        <div className="newplaylist-header">{slicedLink}</div>
        <div className="newplaylist-call-to-action"><Link to="/history" className="button-link">delete playlist</Link></div>
    </div>
}