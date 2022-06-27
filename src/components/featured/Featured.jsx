import Carousel from 'react-bootstrap/Carousel';
import "./featured.css"
import Button from 'react-bootstrap/Button';
import { useVideo } from "../../hooks/useVideo"
export function FeaturedVideo() {
    const { video, setVideo } = useVideo();
    const videoCopy = [...video]
    const slicedVideo = videoCopy.slice(5, 8)
    return (
        <Carousel className="featured-page">
            {slicedVideo.map(({ thumbnail, title, category }) => {
                return <Carousel.Item>
                    <img
                        className="d-block w-100 img-featured"
                        src={thumbnail}
                        alt={title}
                    />

                    <Carousel.Caption>
                        <Button variant="secondary" size="lg" active className="featured-cta">
                            Watch now
                        </Button>
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