import { createContext, useContext, useState } from "react";

const LikedContext=createContext()
export const useLiked=()=>useContext(LikedContext)
export const LikedProvider=({children})=>{
    const [likedArray,setLikedArray]=useState([])
    const [dislikeArray,setDislikedArray]=useState([])
    function addToLiked(likedArray,video){
        setLikedArray([...likedArray,video])
    }
    function removeLiked(likedArray,video){
       const videoToBeRemoved=likedArray.filter((likedVideo)=>{
        return likedVideo !==video
       })
       setLikedArray(videoToBeRemoved)
    }
    function addToDisliked(likedArray,video){
        setDislikedArray([...likedArray,video])
    }
    function removeDisliked(likedArray,video){
       const videoToBeRemoved=likedArray.filter((likedVideo)=>{
        return likedVideo !==video
       })
       setDislikedArray(videoToBeRemoved)
    }
    function clearLiked(){
        setLikedArray([])
    }
    return <LikedContext.Provider value={{likedArray,setLikedArray,addToLiked,removeLiked,dislikeArray,setDislikedArray,addToDisliked,removeDisliked,clearLiked}}>
        {children}
    </LikedContext.Provider>
}