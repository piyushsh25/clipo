import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
const WatchContext = createContext();
export const useWatchLater = () => useContext(WatchContext)
export const WatchProvider = ({ children }) => {
    const [watchLaterArray, setWatchLaterArray] = useState([])
    async function removeFromLater(toDelete) {
        const { _id: videoId } = toDelete
        try {
            const remainingWatchLater = await axios.delete(`/api/user/watchlater/${videoId}`,
                {
                    headers: {
                        authorization: localStorage.getItem("clipoToken")
                    }
                })
            setWatchLaterArray(remainingWatchLater.data.watchlater)
        } catch (error) {
            console.log("ERROR FROM REMOVER FROM LATER", error)
        }
        // const videoToBeRemoved = watchLaterArray.filter((video) => {
        //     return video !== toDelete
        // })
        // setWatchLaterArray(videoToBeRemoved)
    }
    async function removeAllWatchLater() {
        try {
            const clearVideos = await axios.delete("/api/user/watchlater",
                {
                    headers: {
                        authorization: localStorage.getItem("clipoToken")
                    }
                })
            setWatchLaterArray(clearVideos.data.watchlater)
        } catch (err) {
            console.log("ERROR FROM REMOVE ALL WATCH LATER", err)
        }

    }
    async function addToLater(video) {
        try {
            const addToLater = await axios.post("/api/user/watchlater",
                { video },
                {
                    headers: {
                        authorization: localStorage.getItem("clipoToken")
                    }
                }
            )
            //saving the data to the array
            setWatchLaterArray(addToLater.data.watchlater)
        } catch (error) {
            console.log("add to later post", error)
        }
        // setWatchLaterArray([...watchLaterArray, video])
    }
    useEffect(() => {
        localStorage.getItem("clipoToken")
    })
    useEffect(() => {
        async function getWatchLaterHandler() {
            try {
                const getWatchLater = await axios.get("/api/user/watchlater", {
                    headers: {
                        authorization: localStorage.getItem("clipoToken")
                    }
                })
                setWatchLaterArray(getWatchLater.data.watchlater)
            } catch (err) {
                console.log("get watch later", err)
            }

        }
        localStorage.getItem("clipoToken") && getWatchLaterHandler()
    }, [watchLaterArray])
    return <WatchContext.Provider value={{ watchLaterArray, setWatchLaterArray, removeFromLater, addToLater, removeAllWatchLater }}>
        {children}
    </WatchContext.Provider>
}
