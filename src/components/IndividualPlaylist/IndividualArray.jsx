import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation, Link } from 'react-router-dom';
import { usePlayList } from '../../hooks/Playlist/PlaylistContext';
import "../Recommended/Recommended.css";
import { SavedHeader } from "./SavedHeader";
import { NotAvailable } from '../NotAvailable/NotAvailable';
import { IconWatchLater } from '../WatchLater/IconWatchLater';
export function SavedIndividualArray() {
    const { playlistArr, setPlaylistArr, playlistName } = usePlayList()
    const location = useLocation();
    const pathNameLength = location.pathname.length
    //slice the entire pathname to get the name of playlist from link
    const slicedLink = location.pathname.slice(10, pathNameLength)
    const slicedLinkName = slicedLink.split("%20").join(" ")
    const isInPlaylist = playlistName.includes(slicedLinkName)
    function getCategoryVideos(playlistArr, slicedLinkName) {
        return playlistArr.filter((videos) => {
            return videos.playlistname === slicedLinkName
        })
    }
    function deleteFromPlaylist(pid) {
        const remainingVideo = playlistArr.filter((video) => {
            return video.pid !== pid
        })
        setPlaylistArr(remainingVideo)
    }
    const categoryVideos = getCategoryVideos(playlistArr, slicedLinkName)
    return (
        <div>
            {isInPlaylist ? <div>
                <SavedHeader slicedLinkName={slicedLinkName} />
                <div className='recommended-videos-header'>
                    <div className='recommended-videos'>
                        {categoryVideos.length === 0 ? <NotAvailable message={"No videos available"} className={"card-title h5"} /> :
                            categoryVideos.map(({ video, pid }) => {
                                return <Card className="card" key={pid}>
                                    <Card.Img variant="top" className='card-img-top' src={video.thumbnail} />
                                    <IconWatchLater video={video}/>
                                    <Card.Body>
                                        <Card.Title>{video.title.slice(0, 40)}...</Card.Title>
                                        <div className="card-description">6k views | {(video.duration / 60).toFixed(2)} min </div>
                                    </Card.Body>
                                    <Button variant="secondary" size="lg">
                                        <Link className='watch-now-link' to={`/video/${video._id}`}>Watch now</Link>
                                    </Button>
                                    <Button variant="danger" size="lg" className='watch-now-link button-link' onClick={() => deleteFromPlaylist(pid)}>
                                        Delete
                                    </Button>
                                </Card>
                            })
                        }

                    </div>
                </div>
            </div>
                : "Playlist Does'nt Exist"}
        </div>
    );
}
