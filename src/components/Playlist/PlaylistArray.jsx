import { Link } from "react-router-dom";
import { usePlayList } from "../../hooks/Playlist/PlaylistContext"
import "./CardArray.css"
import { NewPlaylist } from "./NewPlaylist"
export function CardArray() {
    const { playlistArr, playlistName } = usePlayList();
    return <div>
        <NewPlaylist />
        <div className="playlist-container">
            {playlistName.map((playlist, id) => {
                return <div className="playlist-card" key={id}>
                    <div className="playlist-name">
                       <Link to={`${playlist}`}><div>  {playlist} </div></Link>
                      <div>10 videos</div>
                    </div>
                    <div className="playlist-trash">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>
                </div>
            })}
        </div>
    </div>
}