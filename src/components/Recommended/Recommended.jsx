import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFilterContext } from '../../hooks/CategoryFilter/FilterContext';
import { Toast } from '../toastCategory/Toast';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./Recommended.css";
import { PopupModal } from '../PopupModal/PopupPlaylist';
import { usePlayList } from '../../hooks/Playlist/PlaylistContext';
import { useHistory } from '../../hooks/History/HistoryContext';
import { IconWatchLater } from '../WatchLater/IconWatchLater';
export function RecommendedVideos() {
    const { FilteredVideo } = useFilterContext();
    const [showPlayListModal, setShowPlaylistModal] = useState(false)
    const [videoToSave, setVideoToSave] = useState(null);
    useEffect(() => {
        if (showPlayListModal) {
            document.body.style.overflow = "hidden"
        }
        if (!showPlayListModal) {
            document.body.style.overflow = "scroll"
        }
    }, [showPlayListModal])
    function saveToPlaylist(video) {
        setVideoToSave(video)
        setShowPlaylistModal(true)
    }
    const { addToHistory } = useHistory()
    return (
        <div className='recommended-videos-header'>
            <div className='h3'>Recommended for you.</div>
            <Toast />
            <div className='recommended-videos'>
                {
                    FilteredVideo.map((video) => {
                        return <Card className="card" key={video._id}>
                            <Card.Img variant="top" className='card-img-top' src={video.thumbnail} />
                            <IconWatchLater video={video}/>
                            <Card.Body>
                                <Card.Title>{video.title.slice(0, 40)}...</Card.Title>
                                <div className="card-description">6k views | {(video.duration / 60).toFixed(2)} min </div>
                            </Card.Body>
                            <Button variant="secondary" size="lg">
                                <Link className='watch-now-link' onClick={() => addToHistory(video)} to={`/video/${video._id}`}>Watch now</Link>
                            </Button>
                            <Button variant="info" size="lg" onClick={() => saveToPlaylist(video)}>
                                save to playlist
                            </Button>
                        </Card>
                    })
                }

            </div>
            {showPlayListModal && <PopupModal showPlayListModal={showPlayListModal} setShowPlaylistModal={setShowPlaylistModal} videoToSave={videoToSave} />}
        </div>
    );
}

export default RecommendedVideos;