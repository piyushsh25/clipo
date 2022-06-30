import { Ratio } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useVideo } from "../../hooks/useVideo"
import { MustWatch } from "./MustWatch"
import "./Video.css"
import { VideoDesctiption } from "./VideoDescription"
import { VideoHeader } from "./VideoHeader"

export function Video(details) {
    return <><div className="video-body">
        <Ratio aspectRatio="16x9" className="video-content">
            <iframe title="image/svg+xml" src={details.videoLink} />
        </Ratio>
        <div>
            <VideoDesctiption details={details}/>
        </div>
        <div className="must-watch-content">
            <VideoHeader />
            <MustWatch />
        </div>

    </div>

    </>
}