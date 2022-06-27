import axios from "axios";
import { useEffect, useState } from "react"

export const useVideo = () => {
    const [video, setVideo] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const {data} =await axios.get("/api/videos")
                setVideo(data.videos)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    },[])
    return {video,setVideo}
}
