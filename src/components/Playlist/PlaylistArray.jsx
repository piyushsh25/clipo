import { Link } from "react-router-dom";
import { usePlayList } from "../../hooks/Playlist/PlaylistContext"
import "./CardArray.css"
import { NewPlaylist } from "./NewPlaylist"
export function CardArray() {
    const { playlistArr, playlistName } = usePlayList();
    function getVideoLength(playlistArr,playlist) {
       return playlistArr.filter((video) => {
            return video.playlistname === playlist
        })
        
    }
    let categorylength;
    return <div>
        <NewPlaylist />
        <div className="playlist-container">
            {playlistName.map((playlist, id) => {
                return <div className="playlist-card" key={id}>
                    <div className="playlist-name">
                        <Link to={`${playlist}`} className='playlist-card-link'><div>  {playlist} </div></Link>
                        <div>
                        {categorylength=getVideoLength(playlistArr, playlist).length}
                       {categorylength<=1?" video":" videos"}
                        
                        </div>
                    </div>
                    <div className="playlist-trash">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>
                </div>
            })}
        </div>
    </div>
}