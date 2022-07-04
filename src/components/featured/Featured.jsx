import Carousel from 'react-bootstrap/Carousel';
import "./featured.css"
import Button from 'react-bootstrap/Button';
import { useVideo } from "../../hooks/useVideo";
import { Link } from "react-router-dom";
import { useHistory } from '../../hooks/History/HistoryContext';
export function FeaturedVideo() {
    const { video, setVideo } = useVideo();
    const videoCopy = [...video]
    const { addToHistory } = useHistory()
    const slicedVideo = videoCopy.slice(5, 8)
    return (
        <Carousel className="featured-page">
            {slicedVideo.map(({ thumbnail, title, category, _id }) => {
                return <Carousel.Item key={_id}>
                    <img
                        className="d-block w-100 img-featured"
                        src={thumbnail}
                        alt={title}
                    />

                    <Carousel.Caption>
                        <Link to={`/video/${_id}`} onClick={() => addToHistory(video)}>
                            <Button variant="secondary" size="lg" active className="featured-cta">
                                Watch now
                            </Button>
                        </Link>
                        <h3>{category}</h3>
                        <p className="featured-title">
                            {title}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            })}

        </Carousel>
    );
}