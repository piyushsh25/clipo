import Carousel from 'react-bootstrap/Carousel';
import "./featured.css"
import Button from 'react-bootstrap/Button';
export function FeaturedVideo() {
    return (
        <Carousel className="featured-page">
            <Carousel.Item>
                <img
                    className="d-block w-100 img-featured"
                    src="	https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
                    alt="First slide"
                />

                <Carousel.Caption>

                    <Button variant="outline-dark">Watch Now</Button>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-featured"
                    src="	https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                <Button variant="outline-dark">Watch Now</Button>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-featured"
                    src="	https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                <Button variant="outline-dark">Watch Now</Button>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}