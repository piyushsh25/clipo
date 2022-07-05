import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ClipoHeader } from "../header/Header"

export const LoggedIn = () => {
    const navigate = useNavigate()
    const [redirectHome, setRedirectHome] = useState(false)
    setTimeout(() => {
        setRedirectHome(true)
        setRedirectHome(false)
    }, 3000)
    if (redirectHome) {
        navigate("/")
    }
    return <>
        <ClipoHeader />
        <div>You are already Logged in.</div>
        <div> Redirecting to home page...</div>
    </>
}