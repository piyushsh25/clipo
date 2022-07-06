import { useWatchLater } from "../../hooks/WatchLater/WatchContext"
import "./LaterHeader.css"
export const IconWatchLater = ({ video }) => {
    const { watchLaterArray, removeFromLater, addToLater } = useWatchLater()
    return <>
        {watchLaterArray.some((videos) => {
            return videos._id === video._id
        }) ? <i className="fas fa-heart fill" onClick={() => removeFromLater(video)} /> : <i className="fas fa-heart" onClick={() => addToLater(video)}></i>}
    </>
}