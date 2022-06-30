import { useEffect, useState } from "react";
import axios from "axios"
export const useCategory = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const { data } =await axios.get("/api/categories")
                setCategory(data.categories)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])
    return { category, setCategory }
}