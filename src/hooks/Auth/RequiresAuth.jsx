import { useEffect } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export const RequiresAuth=()=>{
    const location=useLocation()
    useEffect(()=>{
        localStorage.getItem("clipoToken")
    })
    return localStorage.getItem("clipoToken") ?<Outlet/> : <Navigate to="/signup" state={{from :location}} replace={true}/>
}