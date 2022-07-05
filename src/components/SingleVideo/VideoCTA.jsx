import '@fortawesome/fontawesome-free/css/all.min.css';
import { MDBIcon } from "mdbreact"
import { useWatchLater } from '../../hooks/WatchLater/WatchContext';
import "./Video-CTA.css"
import { usePlayList } from "../../hooks/Playlist/PlaylistContext"
import { IconWatchLater } from "../WatchLater/IconWatchLater"
import { PopupModal } from "../PopupModal/PopupPlaylist"
import { useEffect } from 'react';
import { useLiked } from '../../hooks/LikedVideo/LikedContext';
export function VideoCTA({ video }) {
    const { likedArray, setLikedArray, addToLiked, removeLiked,dislikeArray,addToDisliked,removeDisliked } = useLiked()
    const { showPlayListModal, setShowPlaylistModal } = usePlayList()
    useEffect(() => {
        if (showPlayListModal) {
            document.body.style.overflow = "hidden"
        }
        if (!showPlayListModal) {
            document.body.style.overflow = "scroll"
        }
    }, [showPlayListModal])
    var a = true;
    return <div className='video-cta-icons-container'>
        <div className="card-description">6k views | {(video.duration / 60).toFixed(2)} min </div>
        <div className='video-cta-icons'>
            <div className='liked-cta'>
                {/* <div>
                like
            </div> */}
                {likedArray.includes(video) ? <MDBIcon icon="thumbs-up" onClick={()=>removeLiked(likedArray,video)}/> :
                    <MDBIcon far icon="thumbs-up" onClick={()=>addToLiked(likedArray,video)}/>}
            </div>
            <div className='disliked-cta'>
                {/* <div>
                dislike
            </div> */}
                {dislikeArray.includes(video) ? <MDBIcon icon="thumbs-down" onClick={()=>removeDisliked(dislikeArray,video)}/> :
                    <MDBIcon far icon="thumbs-down" onClick={()=>addToDisliked(dislikeArray,video)}/>}

            </div>
            <div className='watch-later-icon-cta'>
                {/*watch later */}
                <IconWatchLater video={video} />
            </div>
            <div className='add-to-playlist-cta' onClick={() => setShowPlaylistModal(true)}>
                {/* Playlist*/}
                <MDBIcon icon="plus-circle" />
            </div>
        </div>
    </div>
}