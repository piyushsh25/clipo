import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFilterContext } from '../../hooks/CategoryFilter/FilterContext';
import { useVideo } from '../../hooks/useVideo';
import { Toast } from '../toastCategory/Toast';
import { Link, useParams } from "react-router-dom";
import "./Recommended.css";
export function RecommendedVideos() {
    const { video, setVideo } = useVideo();
    const { FilteredVideo, state, dispatch } = useFilterContext();
    return (
        <div className='recommended-videos-header'>
            <div className='h3'>Must watch videos</div>
            <Toast />
            <div className='recommended-videos'>
                {
                    FilteredVideo.map(({ duration, thumbnail, title, id, _id }) => {
                        return <Card className="card" key={_id}>
                            <Card.Img variant="top" className='card-img-top' src={thumbnail} />
                            <Card.Body>
                                <Card.Title>{title.slice(0, 40)}...</Card.Title>
                                <div className="card-description">6k views | {(duration / 60).toFixed(2)} min </div>
                            </Card.Body>
                            <Button variant="secondary" size="lg">
                                <Link className='watch-now-link' to={`/video/${_id}`}>Watch now</Link>
                            </Button>
                        </Card>
                    })
                }

            </div>

        </div>
    );
}

export default RecommendedVideos;