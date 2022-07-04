import { useParams } from "react-router-dom";
import { ClipoHeader } from "../../components/header/Header";
import { Video } from "../../components/SingleVideo/Video";
import { useFilterContext } from "../../hooks/CategoryFilter/FilterContext";
import { useVideo } from "../../hooks/useVideo";
export function VideoPage() {
    const {FilteredVideo}=useFilterContext()
    const { videoId } = useParams();
    function findVideoDetails(video, videoId) {
        return video.find((videos) => videos._id === videoId)
    }
    const videoDetails = findVideoDetails(FilteredVideo, videoId)
    return <div>
        <ClipoHeader />
        <Video videoDetails={videoDetails} video={FilteredVideo}/>
    </div>
}