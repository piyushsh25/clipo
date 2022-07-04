import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useWatchLater } from '../../hooks/WatchLater/WatchContext';
import "../Recommended/Recommended.css";
import { IconWatchLater } from './IconWatchLater';
import { NotAvailable } from "../NotAvailable/NotAvailable"
import { Link } from "react-router-dom"
export function WatchLaterArray() {
    const { watchLaterArray, setWatchLaterArray } = useWatchLater()
    console.log(watchLaterArray)
    return (
        <div className='recommended-videos-header'>
            <div className='recommended-videos'>
                {watchLaterArray.length === 0 ? <NotAvailable message={"Empty watch later"} /> :
                    watchLaterArray.map((video) => {
                        return <Card className="card">
                            <Card.Img variant="top" src={video.thumbnail} />
                            <IconWatchLater video={video} />
                            {/* <i className="fas fa-heart-square"></i> */}
                            <Card.Body>
                                <Card.Title>{video.title.slice(0, 20)}...</Card.Title>
                                <div className="card-description">6k views | 2.34 </div>
                                <Link to={`/video/${video._id}`}><Button variant="primary">watch now</Button></Link>

                            </Card.Body>

                        </Card>
                    })
                }

            </div>
        </div>
    );
}
