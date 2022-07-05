import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { LoggedIn } from "../../components/Login/LoggedIn"

export const RedirectRoute = () => {
    useEffect(() => {
        localStorage.getItem("clipoToken")
    })
    return !(localStorage.getItem("clipoToken")) ? <Outlet /> : <LoggedIn />
}