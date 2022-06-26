import { Card } from "react-bootstrap";
import "./VideoDescription.css"
export function VideoDesctiption() {
    return <Card className="video-description">
        <Card.Header>Quot kef vfdjm efkj fkv jefro kerfje qdeu fvk</Card.Header>
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