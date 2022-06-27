import "./Toast.css"
import { useCategory } from "../../hooks/useCategory"
import { useFilterContext } from "../../hooks/CategoryFilter/FilterContext";
export function Toast() {
    const { category, setCategory } = useCategory();
    const {FilteredVideo, state, dispatch}= useFilterContext();
    return <div className="homepage-filter">
        {category.map(({ categoryName, description, id }) => {
            console.log(categoryName)
            return <div>   
               <input type="radio" id={`radio${id}`} name="radios" value="all" onChange={()=>dispatch({type:categoryName})}/>
                <label for={`radio${id}`}>{categoryName}</label>
            </div>
        })}

    </div>
}