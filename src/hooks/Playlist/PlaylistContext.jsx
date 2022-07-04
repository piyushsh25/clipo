import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
const PlaylistContext = createContext();
export const PlaylistProvider = ({ children }) => {
    const [playlistArr, setPlaylistArr] = useState([]);
    const [playlistName, setPlaylistName] = useState([])
    const [showPlayListModal, setShowPlaylistModal] = useState(false)
    function addToPlayList(video, categoryname) {
        //to check if the video is already in the selected playlist
        let isVideoPresent = false;
        playlistArr.map((videoDetails) => {
            if (videoDetails.playlistname === categoryname) {
                if (videoDetails.video._id === video._id) {
                    //throw error afterwards {add feat}
                    console.log("Duplicate not allowed")
                    //true if the video is present and throw error
                    isVideoPresent = true
                }
            }
        })

        if (!isVideoPresent) {
            // on video not present make a new object
            const addVideo = [...playlistArr, { pid: uuid(), playlistname: categoryname, video }]
            //set the new video in the array
            setPlaylistArr(addVideo)
        }

    }
    function deletePlaylist(playlistToBeDeleted, playlistArr, playlistName, navigate) {
        //new filtered array after deleting the clicked playlist
        const newPlaylistNames = playlistName.filter((name) => {
            return name !== playlistToBeDeleted
        })
        //set the playlist array to the array returned from above
        setPlaylistName(newPlaylistNames)
        //new filtered array of videos after deleting the entire playlist 
        const newPlaylistArray = playlistArr.filter((playlist) => {
            return playlist.playlistname !== playlistToBeDeleted
        })
        //set the playlist array to the array returned from above
        setPlaylistArr(newPlaylistArray)
        //after deletion navigate to the playlist page
        navigate("/playlist")
    }
    return <PlaylistContext.Provider value={{ playlistArr, setPlaylistArr, addToPlayList, playlistName, setPlaylistName, deletePlaylist, showPlayListModal, setShowPlaylistModal }}>
        {children}
    </PlaylistContext.Provider>
}
export const usePlayList = () => useContext(PlaylistContext)