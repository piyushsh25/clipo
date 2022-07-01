import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFilterContext } from '../../hooks/CategoryFilter/FilterContext';
import "./MustWatch.css"
import { Link } from "react-router-dom"
export function MustWatch(details) {
    const { FilteredVideo } = useFilterContext()
    const filterVideoCopy = [...FilteredVideo]
    // removes video in must watch section that is currently being played
    const mustWatchDisplayFiltered = filterVideoCopy.filter((video) => {
        return video.videoLink !== details.details.videoLink
    })
    const mustWatchCategoryFiltered = mustWatchDisplayFiltered.filter((video) => {
        return video.categoryName === details.details.categoryName
    })
    return (
        <div className='recommended-videos-header'>
            <div className='recommended-videos-must-watch'>
                {
                    mustWatchCategoryFiltered.map((video, id) => {
                        return <Card className="card" key={id}>
                            <Card.Img variant="top" src={video.thumbnail} />
                            <i className="fas fa-heart"></i>
                            <Card.Body>
                                <Card.Title>{(video.title).slice(0, 25)}</Card.Title>
                                <div className="card-description">6k views | {(video.duration / 60).toFixed(2)}min.. </div>
                                <Link to={`/video/${video._id}`}> <Button variant="primary"> watch now</Button></Link>
                            </Card.Body>

                        </Card>
                    })
                }

            </div>
        </div>
    );
}
