import { createContext, useContext, useReducer } from "react";
import { FilterReducerFunction } from "./FilterReducerFunction";
import { useVideo } from "../../hooks/useVideo"
const FilterContext = createContext();
export const useFilterContext = () => useContext(FilterContext);
export const FilterProvider = ({ children }) => {
    const { video } = useVideo()
    const [state, dispatch] = useReducer(FilterReducerFunction, {
        categoryName: null
    })
    const FilteredVideo = filterVideo(video, state.categoryName)
    return <FilterContext.Provider value={{ FilteredVideo, state, dispatch }}>
        {children}
    </FilterContext.Provider>
}
function filterVideo(videos, categoryName) {
    console.log(categoryName)
    if (categoryName) {
        console.log(categoryName)
        return videos.filter((video) => {
            return video.categoryName === categoryName
        })
    } else {
        return videos
    }
}