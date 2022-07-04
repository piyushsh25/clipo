import { useWatchLater } from "../../hooks/WatchLater/WatchContext"
import "./LaterHeader.css"
export const IconWatchLater=({video})=>{
    const {watchLaterArray,setWatchLaterArray,removeFromLater,addToLater}=useWatchLater()
    return <>
    {watchLaterArray.includes(video)? <i className="fas fa-heart fill" onClick={()=>removeFromLater(video)}/>: <i className="fas fa-heart" onClick={()=>addToLater(video)}></i>}
    </>
}