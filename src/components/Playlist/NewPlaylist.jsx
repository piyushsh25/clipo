import {Link} from "react-router-dom"
import "./NewPlaylist.css"
export function NewPlaylist(){
    return <div className="newplaylist">
        <div className="newplaylist-header">My playlist</div>
        <div className="newplaylist-call-to-action"><Link to="/playlist" className="button-link"> Playlist +</Link></div>
    </div>
}