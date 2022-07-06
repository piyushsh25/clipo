import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
const HistoryContext = createContext();
export const HistoryProvider = ({ children }) => {
    const [historyArray, setHistoryArray] = useState([])
    async function addToHistory(video) {
        try {
            const historyVideos = await axios.post("/api/user/history",
                { video },
                {
                    headers:
                    {
                        authorization: localStorage.getItem("clipoToken")
                    }
                })
            setHistoryArray(historyVideos.data.history)
        } catch (err) {
            console.log("ERR FROM ADD TO HISTORY", err)
        }
        // setHistoryArray([...historyArray, video])
    }
    async function clearHistory() {
        try {
            const clearHistoryVideos = await axios.delete(`/api/user/history/all`,
                {
                    headers:
                    {
                        authorization: localStorage.getItem("clipoToken")
                    }
                })
            setHistoryArray(clearHistoryVideos.data.history)
        } catch (err) {
            console.log("error from delete from history", err)
        }
    }
    async function removeHistoryVideo(toDelete) {
        //destructuring the video id
        const { _id: videoId } = toDelete
        try {
            const remainingHistory = await axios.delete(`/api/user/history/${videoId}`,
                {
                    headers:
                    {
                        authorization: localStorage.getItem("clipoToken")
                    }
                })
            setHistoryArray(remainingHistory.data.history)
        } catch (err) {
            console.log("error from delete from history", err)
        }
        // const remainingHistory = historyArray.filter((videos) => {
        //     return videos !== toDelete
        // })
        // setHistoryArray(remainingHistory)
    }
    useEffect(() => {
        async function getHistoryHandler() {
            try {
                const getHistory = await axios.get("/api/user/history", {
                    headers: {
                        authorization: localStorage.getItem("clipoToken")
                    }
                })
                setHistoryArray(getHistory.data.history)
            } catch (err) {
                console.log("error from get history", err)
            }
        }
        localStorage.getItem("clipoToken") && getHistoryHandler()
    }, [historyArray])
    return <HistoryContext.Provider value={{ historyArray, setHistoryArray, addToHistory, clearHistory, removeHistoryVideo }}>
        {children}
    </HistoryContext.Provider>
}
export const useHistory = () => useContext(HistoryContext)