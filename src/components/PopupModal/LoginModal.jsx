import { Link } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"
import { useAuth } from "../../hooks/Auth/AuthContext"

export const LoginModal = () => {
    const {  setShowLoginModal } = useAuth()
    function loginModalHandler(setShowLoginModal){
        setShowLoginModal(false)
    }
    return <div className="modalBackground">
        <div className="modalContainer login-modal">
            <div className="titleCloseBtn">
                <button
                    onClick={() => {
                        loginModalHandler(setShowLoginModal)
                    }}
                >
                    <AiOutlineClose />
                </button>
            </div>
            <div className="title">
                <h1>You are not logged in.</h1>
            </div>
            <div className="footer">
                <button
                    onClick={() => {
                        loginModalHandler(setShowLoginModal)
                    }}
                    id="cancelBtn"
                >
                    Cancel
                </button>
                <Link to="/login" onClick={()=>{
                     loginModalHandler(setShowLoginModal)
                }}>
                    <button>
                        Login
                    </button>
                </Link>
            </div>
        </div>
    </div>
}