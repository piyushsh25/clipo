import { Card } from "react-bootstrap";
import { VideoCTA } from "./VideoCTA";
import "./VideoDescription.css"
export function VideoDesctiption({details,video}) {
    return <Card className="video-description">
        <Card.Header className="video-cta-container">
            <VideoCTA video={details}/>
        </Card.Header>
        <Card.Body>
            <blockquote className="blockquote mb-0">
                <p>
                    {details.title}
                </p>
                <footer className="blockquote-footer">
                   {details.createdAt.slice(0,10)} <cite title="Source Title">{details.creator}</cite>
                </footer>
            </blockquote>
        </Card.Body>
    </Card>
}