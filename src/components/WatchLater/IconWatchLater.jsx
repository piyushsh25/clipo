import { useWatchLater } from "../../hooks/WatchLater/WatchContext"
import "./LaterHeader.css"
import {useAuth} from "../../hooks/Auth/AuthContext"
export const IconWatchLater = ({ video }) => {
    const { watchLaterArray, removeFromLater, addToLater } = useWatchLater()
    const { setShowLoginModal } = useAuth()
    return <>
        {watchLaterArray.some((videos) => {
            return videos._id === video._id
        }) ? <i className="fas fa-heart fill" onClick={() => removeFromLater(video)} /> : <i className="fas fa-heart" onClick={() =>localStorage.getItem("clipoToken") ? addToLater(video)(true) : setShowLoginModal(true)}></i>}
    </>
}