import { useState } from "react"
import { Link } from "react-router-dom"
import "./NewPlaylist.css"
export function NewPlaylist({newPlaylistPopUp,setNewPlaylistPopUp}) {
    return <div className="newplaylist">
        <div className="newplaylist-header">My playlist</div>
        <div className="newplaylist-call-to-action">
            <button to="/playlist" className="button-link" onClick={()=>setNewPlaylistPopUp(true)}> Playlist +</button>
        </div>
    </div>
}