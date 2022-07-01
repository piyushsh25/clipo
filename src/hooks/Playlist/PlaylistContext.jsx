import { createContext, useContext, useState } from "react";

const PlaylistContext=createContext();
export const PlaylistProvider=({children})=>{
    const [playlistArr,setPlaylistArr]=useState([]);
    return <PlaylistContext.Provider value={{playlistArr,setPlaylistArr}}>
        {children}
    </PlaylistContext.Provider>
}
export const usePlayList=()=>useContext(PlaylistContext)