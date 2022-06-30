import "./CardArray.css"
import { NewPlaylist } from "./NewPlaylist"
export function CardArray() {
    const arr = [1, 2, 3, 4, 5, 6]
    return <div>
        <NewPlaylist />
        <div className="playlist-container">
            {arr.map((num) => {
                return <div className="playlist-card">
                    <div className="playlist-name">
                        <div>  My playlist {num} </div>
                        <div> 10 videos </div>
                    </div>
                    <div className="playlist-trash">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>
                </div>
            })}
        </div>
    </div>
}