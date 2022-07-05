import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useHistory } from '../../hooks/History/HistoryContext';
import { NotAvailable } from '../NotAvailable/NotAvailable';
import "../Recommended/Recommended.css";
import { Link } from "react-router-dom"
import { IconWatchLater } from '../WatchLater/IconWatchLater';
import { useLiked } from '../../hooks/LikedVideo/LikedContext';
export function LikedArray() {
    const { likedArray,addToLiked,removeLiked } = useLiked()
    return (
        <div className='recommended-videos-header'>
            <div className='recommended-videos'>
                {likedArray.length === 0 ? <NotAvailable message={"Liked videos empty"} /> :
                    likedArray.map((video) => {
                        return <Card className="card" key={video._id}>
                            <Card.Img variant="top" src={video.thumbnail} />
                           <IconWatchLater video={video}/>
                            {/* <i className="fas fa-heart-square"></i> */}
                            <Card.Body>
                                <Card.Title>{(video.title).slice(0, 20)}...</Card.Title>
                                <div className="card-description">6k views | {(video.duration / 60).toFixed(2)} min </div>
                            </Card.Body>
                            <Link to={`/video/${video._id}`} onClick={() => addToLiked(likedArray,video)}>
                                <Button variant="secondary" size="lg" active className="featured-cta history">
                                    Watch now
                                </Button>
                            </Link>
                            <Button variant="danger" size="lg" active className="featured-cta" onClick={() => removeLiked(likedArray,video)}>
                                Remove
                            </Button>
                        </Card>
                    })
                }
            </div>
        </div>
    );
}
