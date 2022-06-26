import {Link} from "react-router-dom"
import "../Playlist/NewPlaylist.css"
import "../History/History.css"
export function WatchLaterHeader(){
    return <div className="newplaylist">
        <div className="newplaylist-header">History</div>
        <div className="newplaylist-call-to-action"><Link to="/history" className="button-link">clear History</Link></div>
    </div>
}