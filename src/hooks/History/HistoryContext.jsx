import { createContext, useContext, useState } from "react"
const HistoryContext = createContext();
export const HistoryProvider = ({ children }) => {
    const [historyArray, setHistoryArray] = useState([])
    function addToHistory(video) {
        setHistoryArray([...historyArray, video])
    }
    function clearHistory() {
        setHistoryArray([])
    }
    function removeHistoryVideo(toDelete) {
        const remainingHistory = historyArray.filter((videos) => {
            return videos !== toDelete
        })
        setHistoryArray(remainingHistory)
    }
    return <HistoryContext.Provider value={{ historyArray, setHistoryArray, addToHistory, clearHistory, removeHistoryVideo }}>
        {children}
    </HistoryContext.Provider>
}
export const useHistory = () => useContext(HistoryContext)