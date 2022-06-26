import { Ratio } from "react-bootstrap"
import { MustWatch } from "./MustWatch"
import "./Video.css"
import { VideoDesctiption } from "./VideoDescription"
import { VideoHeader } from "./VideoHeader"
export function Video() {
    return <><div className="video-body">
        <Ratio aspectRatio="16x9" className="video-content">
            <iframe title="image/svg+xml" src="https://www.youtube.com/embed/tgbNymZ7vqY" />
        </Ratio>
        <div>
            <VideoDesctiption />
        </div>
        <div className="must-watch-content">
            <VideoHeader />
            <MustWatch />
        </div>
       
    </div>

    </>
}