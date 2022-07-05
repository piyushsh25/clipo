import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)
export const AuthProvider = ({ children }) => {
    const [fname, setfName] = useState("")
    const [lname, setlName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showLoginModal, setShowLoginModal] = useState(false)
    //the scroll property  was set to noscroll when false
    useEffect(() => {
        if (!showLoginModal) {
            document.body.style.overflow = "scroll"
        }
        if (showLoginModal) {
            document.body.style.overflow = "hidden"
        }
        
    })
    async function submitSignupHandler(fname, lname, email, password, navigate, location) {
        try {
            //api call for response
            const { data } = await axios.post('/api/auth/signup', {
                firstName: fname,
                lastName: lname,
                email: email,
                password: password
            });
            //saving the token to local storage
            localStorage.setItem("clipoToken", data.encodedToken);
            navigate(location)
            //clearing all the fields after login
            setEmail("")
            setfName("")
            setlName("")
            setPassword("")
        }
        catch (err) {
            console.log(err)
        }


    }
    async function loginHandler(email, password, navigate, pathName) {
        try {
            const { data } = await axios.post("/api/auth/login", {
                email, password
            })
            localStorage.setItem("clipoToken", data.encodedToken)
            localStorage.setItem("userDetails", data.foundUser)
            navigate(pathName)
            setEmail("")
            setPassword("")
        }
        catch (err) {
            console.log(err)
        }
    }
    function logoutHandler(navigate) {
        navigate("/")
        localStorage.clear()
    }

    return <AuthContext.Provider value={{ fname, setfName, lname, setlName, email, setEmail, password, setPassword, submitSignupHandler, loginHandler, logoutHandler, showLoginModal, setShowLoginModal }}>
        {children}
    </AuthContext.Provider>
}