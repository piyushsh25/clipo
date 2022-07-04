import '@fortawesome/fontawesome-free/css/all.min.css';
import { MDBIcon } from "mdbreact"
import { useWatchLater } from '../../hooks/WatchLater/WatchContext';
import "./Video-CTA.css"
import { usePlayList } from "../../hooks/Playlist/PlaylistContext"
import { IconWatchLater } from "../WatchLater/IconWatchLater"
import { PopupModal } from "../PopupModal/PopupPlaylist"
import { useEffect } from 'react';
export function VideoCTA({ video }) {

    const { showPlayListModal, setShowPlaylistModal } = usePlayList()
    useEffect(() => {
        if (showPlayListModal) {
            document.body.style.overflow = "hidden"
        }
        if (!showPlayListModal) {
            document.body.style.overflow = "scroll"
        }
    }, [showPlayListModal])
    var a = false;
    return <div className='video-cta-icons-container'>
        <div className="card-description">6k views | {(video.duration/60).toFixed(2)} min </div>
        <div className='video-cta-icons'>
            <div>
                {/* <div>
                like
            </div> */}
                {a === false ? <MDBIcon far icon="thumbs-up" /> :
                    <MDBIcon icon="thumbs-up" />}
            </div>
            <div>
                {/* <div>
                dislike
            </div> */}
                {a === false ? <MDBIcon far icon="thumbs-down" /> :
                    <MDBIcon icon="thumbs-down" />}

            </div>
            <div className='watch-later-icon-cta'>
                {/* <div>
                watch later
            </div> */}
                <IconWatchLater video={video} />
            </div>
            <div className='add-to-playlist-cta' onClick={() => setShowPlaylistModal(true)}>
                {/* <div>
                Playlist
            </div> */}
                <MDBIcon icon="plus-circle" />
            </div>
        </div>
    </div>
}