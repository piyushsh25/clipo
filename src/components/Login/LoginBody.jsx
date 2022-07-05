import { Form, Navbar, Button } from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom"
import "./LoginBody.css"
import {useAuth} from "../../hooks/Auth/AuthContext"
export function LoginBody() {
    const {email,setEmail,password,setPassword,loginHandler}=useAuth()
    const location=useLocation()
    const navigate=useNavigate()
    const pathName=location?.state || "/"
    return <div><Form className="login-form">
        <Navbar.Brand href="#" className="header-header-name login-header"><span className="header-first-word">My</span> Clipo</Navbar.Brand>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={()=>loginHandler(email,password,navigate,pathName)}>
            Submit
        </Button>
        <Link to="/signup">
        Don't have an account?
        </Link>
    </Form>
 
    </div>
}