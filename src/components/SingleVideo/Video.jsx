import { Ratio } from "react-bootstrap"
import { MustWatch } from "./MustWatch"
import "./Video.css"
import { VideoDesctiption } from "./VideoDescription"
import { VideoHeader } from "./VideoHeader"

import {usePlayList} from "../../hooks/Playlist/PlaylistContext"
import {PopupModal} from "../PopupModal/PopupPlaylist"
export function Video({videoDetails,video}) {
    const {showPlayListModal, setShowPlaylistModal}=usePlayList()
    return <>
        <div className="video-body">
            <Ratio aspectRatio="16x9" className="video-content">
                <iframe title="image/svg+xml" src={videoDetails.videoLink} />
            </Ratio>
            <div>
                <VideoDesctiption details={videoDetails} video={video}/>
            </div>
            <div className="must-watch-content">
                <VideoHeader />
                <MustWatch details={videoDetails} />
            </div>
        </div>
        {showPlayListModal && <PopupModal showPlayListModal={showPlayListModal} setShowPlaylistModal={setShowPlaylistModal} videoToSave={videoDetails} />}
    </>
}