import {Link} from "react-router-dom"
import "../Playlist/NewPlaylist.css"
import "./History.css"
export function HistoryHeader(){
    return <div className="newplaylist">
        <div className="newplaylist-header">History</div>
        <div className="newplaylist-call-to-action"><Link to="/history" className="button-link">clear History</Link></div>
    </div>
}