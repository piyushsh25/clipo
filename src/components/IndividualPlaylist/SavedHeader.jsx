import {Link} from "react-router-dom"
import "../Playlist/NewPlaylist.css"
import "../History/History.css"
export function SavedHeader(){
    return <div className="newplaylist">
        <div className="newplaylist-header">Playlist 1</div>
        <div className="newplaylist-call-to-action"><Link to="/history" className="button-link">delete playlist</Link></div>
    </div>
}