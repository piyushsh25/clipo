import { createContext, useContext, useState } from "react";
import { AiFillContacts } from "react-icons/ai";
import { v4 as uuid } from "uuid";
const PlaylistContext = createContext();
export const PlaylistProvider = ({ children }) => {
    const [playlistArr, setPlaylistArr] = useState([]);
    const [playlistName, setPlaylistName] = useState(["default"])
    function addToPlayList(video,categoryname) {
        const addVideo = [...playlistArr, { playlistname: categoryname, video }]
        setPlaylistArr(addVideo)
    }
    return <PlaylistContext.Provider value={{ playlistArr, setPlaylistArr, addToPlayList, playlistName, setPlaylistName }}>
        {children}
    </PlaylistContext.Provider>
}
export const usePlayList = () => useContext(PlaylistContext)