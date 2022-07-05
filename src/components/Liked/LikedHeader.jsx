import "../Playlist/NewPlaylist.css"
import "../History/History.css"
import { useLiked } from "../../hooks/LikedVideo/LikedContext"
export function LikedHeader() {
    const {clearLiked}=useLiked()
    return <div className="newplaylist">
        <div className="newplaylist-header">Liked</div>
        <div className="newplaylist-call-to-action" onClick={clearLiked}><button to="/history" className="button-link">clear liked</button></div>
    </div>
}