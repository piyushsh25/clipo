import '@fortawesome/fontawesome-free/css/all.min.css';
import { MDBIcon } from "mdbreact"
import "./Video-CTA.css"
import { usePlayList } from "../../hooks/Playlist/PlaylistContext"
import { IconWatchLater } from "../WatchLater/IconWatchLater"
import { useEffect } from 'react';
import { useLiked } from '../../hooks/LikedVideo/LikedContext';
import { useAuth } from '../../hooks/Auth/AuthContext';
export function VideoCTA({ video }) {
    const { likedArray, addToLiked, removeLiked, dislikeArray, addToDisliked, removeDisliked } = useLiked()
    const { setShowPlaylistModal } = usePlayList()
    const { setShowLoginModal } = useAuth()
    useEffect(() => {
        localStorage.getItem("clipoToken")
    })
    let isLikedVideo;
    return <div className='video-cta-icons-container'>
        <div className="card-description">6k views | {(video.duration / 60).toFixed(2)} min </div>
        <div className='video-cta-icons'>
            <div className='liked-cta'>
                {/* <div>
                like
            </div> */}
                {
                    isLikedVideo = likedArray.some((videos) => {
                        return videos._id === video._id
                    })
                }
                {isLikedVideo ? <MDBIcon icon="thumbs-up" onClick={() => removeLiked(likedArray, video)} /> :
                    <MDBIcon far icon="thumbs-up" onClick={() => localStorage.getItem("clipoToken") ? addToLiked(likedArray, video) : setShowLoginModal(true)} />}
            </div>
            <div className='disliked-cta'>
                {/* <div>
                dislike
            </div> */}
                {dislikeArray.includes(video) ? <MDBIcon icon="thumbs-down" onClick={() => removeDisliked(dislikeArray, video)} /> :
                    <MDBIcon far icon="thumbs-down" onClick={() => localStorage.getItem("clipoToken") ? addToDisliked(dislikeArray, video) : setShowLoginModal(true)} />}

            </div>
            <div className='watch-later-icon-cta'>
                {/*watch later */}
                <IconWatchLater video={video} />
            </div>
            <div className='add-to-playlist-cta' onClick={() => localStorage.getItem("clipoToken") ? setShowPlaylistModal(true) : setShowLoginModal(true)}>
                {/* Playlist*/}
                <MDBIcon icon="plus-circle" />
            </div>
        </div>
    </div>
}