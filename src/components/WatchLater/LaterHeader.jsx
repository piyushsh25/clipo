import {Link} from "react-router-dom"
import "../Playlist/NewPlaylist.css"
import "../History/History.css"
import { useWatchLater } from "../../hooks/WatchLater/WatchContext"
export function WatchLaterHeader(){
    const {removeAllWatchLater}=useWatchLater()
    return <div className="newplaylist">
        <div className="newplaylist-header">Watch Later</div>
        <div className="newplaylist-call-to-action"><button className="button-link" onClick={removeAllWatchLater}> remove all</button></div>
    </div>
}