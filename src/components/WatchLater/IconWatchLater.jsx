import { useEffect } from "react"
import { useAuth } from "../../hooks/Auth/AuthContext"
import { useWatchLater } from "../../hooks/WatchLater/WatchContext"
import "./LaterHeader.css"
export const IconWatchLater = ({ video }) => {
    const { watchLaterArray, setWatchLaterArray, removeFromLater, addToLater } = useWatchLater()
    const { setShowLoginModal } = useAuth()
    const token = localStorage.getItem("clipoToken")
    function loginModalHandler(setShowLoginModal) {
        setShowLoginModal(true)
    }
    useEffect(() => {
        localStorage.getItem("clipoToken")
    })
    
    return <>
        {watchLaterArray.includes(video) ? <i className="fas fa-heart fill" onClick={() => token ? removeFromLater(video) : loginModalHandler(setShowLoginModal)} /> : <i className="fas fa-heart" onClick={() => token ? addToLater(video) : loginModalHandler(setShowLoginModal)}></i>}
    </>
}