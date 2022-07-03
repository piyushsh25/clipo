import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation, Link } from 'react-router-dom';
import { usePlayList } from '../../hooks/Playlist/PlaylistContext';
import "../Recommended/Recommended.css";
import { SavedHeader } from "../../components/IndividualPlaylist/SavedHeader";
export function SavedArray() {
    const location = useLocation();
    const pathNameLength = location.pathname.length
    //slice the entire pathname to get the name of playlist from link
    const slicedLink = location.pathname.slice(10, pathNameLength)
    const { playlistArr } = usePlayList();
    function getCategoryVideos(playlistArr, slicedLink) {
        return playlistArr.filter((videos) => {
            return videos.playlistname === slicedLink
        })
    }
    const categoryVideos = getCategoryVideos(playlistArr, slicedLink)

    return (
        <div>
       <SavedHeader slicedLink={slicedLink}/>
        <div className='recommended-videos-header'>

            <div className='recommended-videos'>
                {
                    categoryVideos.map(({ video }) => {
                        return <Card className="card" key={video._id}>
                            <Card.Img variant="top" className='card-img-top' src={video.thumbnail} />
                            <Card.Body>
                                <Card.Title>{video.title.slice(0, 40)}...</Card.Title>
                                <div className="card-description">6k views | {(video.duration / 60).toFixed(2)} min </div>
                            </Card.Body>
                            <Button variant="secondary" size="lg">
                                <Link className='watch-now-link' to={`/video/${video._id}`}>Watch now</Link>
                            </Button>
                        </Card>
                    })
                }

            </div>
        </div>
        </div>
    );
}
