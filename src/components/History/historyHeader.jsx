import { Link } from "react-router-dom"
import { useHistory } from "../../hooks/History/HistoryContext"
import "../Playlist/NewPlaylist.css"
import "./History.css"
export function HistoryHeader() {
    const {clearHistory}=useHistory()
    return <div className="newplaylist">
        <div className="newplaylist-header">History</div>
        <div className="newplaylist-call-to-action" onClick={clearHistory}><button to="/history" className="button-link">clear History</button></div>
    </div>
}