import { Card } from "react-bootstrap";
import { VideoCTA } from "./VideoCTA";
import "./VideoDescription.css"
export function VideoDesctiption() {
    return <Card className="video-description">
        <Card.Header className="video-cta-container">
        <VideoCTA/>
        </Card.Header>
        <Card.Body>
            <blockquote className="blockquote mb-0">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
            </blockquote>
        </Card.Body>
    </Card>
}