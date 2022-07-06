import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const LikedContext = createContext()
export const useLiked = () => useContext(LikedContext)
export const LikedProvider = ({ children }) => {
    const [likedArray, setLikedArray] = useState([])
    const [dislikeArray, setDislikedArray] = useState([])
    async function addToLiked(likedArray, video) {
        //api to add video with video and headers
        try {
            const likedVideo = await axios.post("/api/user/likes",
                { video },
                {
                    headers: {
                        authorization: localStorage.getItem("clipoToken")
                    }
                }
            )
            setLikedArray(likedVideo.data.likes)
        }
        catch (err) {
            console.log("error in add to liked")
        }

    }
    async function removeLiked(likedArray, video) {
        //api to add video with video and headers
        const videoId = video._id
        try {
            const remainingVideos = await axios.delete(`/api/user/likes/${videoId}`,
                {
                    headers: {
                        authorization: localStorage.getItem("clipoToken")
                    }
                }
            )
            setLikedArray(remainingVideos.data.likes)
        } catch (err) {
            console.log("err in remove from dislikes")
        }
        // const videoToBeRemoved = likedArray.filter((likedVideo) => {
        //     return likedVideo !== video
        // })
        // setLikedArray(videoToBeRemoved)
    }
    function addToDisliked(likedArray, video) {
        setDislikedArray([...likedArray, video])
    }
    function removeDisliked(likedArray, video) {
        const videoToBeRemoved = likedArray.filter((likedVideo) => {
            return likedVideo !== video
        })
        setDislikedArray(videoToBeRemoved)
    }
    async function clearLiked() {
        //copy pasted modified some api for clear
        try {
            const remainingVideos =await axios.delete(`/api/user/likes/`,
                {
                    headers: {
                        authorization: localStorage.getItem("clipoToken")
                    }
                }
            )
            setLikedArray(remainingVideos.data.likes)
            
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        localStorage.getItem("clipoToken")
    })
    useEffect(() => {
        async function getLikedVideoHandler() {
            try {
                const likedVideos = await axios.get("/api/user/likes",
                    {
                        headers: {
                            authorization: localStorage.getItem("clipoToken")
                        }
                    })
                setLikedArray(likedVideos.data.likes)
            } catch (err) {
                console.log(err)
            }

        }
        getLikedVideoHandler()
    }, [likedArray])
    return <LikedContext.Provider value={{ likedArray, setLikedArray, addToLiked, removeLiked, dislikeArray, setDislikedArray, addToDisliked, removeDisliked, clearLiked }}>
        {children}
    </LikedContext.Provider>
}