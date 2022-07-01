import { usePlayList } from "../../hooks/Playlist/PlaylistContext"
import "./CardArray.css"
import { NewPlaylist } from "./NewPlaylist"
export function CardArray() {
    const { playlistArr, playlistName } = usePlayList();
    console.log(playlistArr);
    let categoryCheck=[];
    return <div>
        <NewPlaylist />
        <div className="playlist-container">
            {playlistName.map((playlist, id) => {
                return <div className="playlist-card" key={playlist.id}>
                    <div className="playlist-name">
                        <div>  {playlist} </div>
                        {
                            categoryCheck = playlistArr.filter((video) => {
                                return video.playlistname === playlist
                            })
                        }

                    </div>
                    <div className="playlist-trash">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>
                </div>
            })}
        </div>
    </div>
}