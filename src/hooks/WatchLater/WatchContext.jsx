import { createContext, useContext, useState } from "react";

const WatchContext = createContext();
export const useWatchLater = () => useContext(WatchContext)
export const WatchProvider = ({ children }) => {
    const [watchLaterArray, setWatchLaterArray] = useState([])
    function removeFromLater(toDelete) {
        const videoToBeRemoved = watchLaterArray.filter((video) => {
            return video !== toDelete
        })
        setWatchLaterArray(videoToBeRemoved)
    }
    function removeAllWatchLater() {
        setWatchLaterArray([])
    }
    function addToLater(video) {
console.log(video._id)
        setWatchLaterArray([...watchLaterArray, video])
    }
    return <WatchContext.Provider value={{ watchLaterArray, setWatchLaterArray, removeFromLater, addToLater, removeAllWatchLater }}>
        {children}
    </WatchContext.Provider>
}
