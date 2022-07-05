import { Form, Row, Col, Button, Navbar } from "react-bootstrap"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/Auth/AuthContext"
import "./Signup.css"
export function SignUpBody() {
    const { fname, setfName, lname, setlName, email, setEmail, password, setPassword, submitSignupHandler } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const pathName = location?.state?.from?.pathname || ""
    return <Form className="signup-form">
        <Navbar.Brand href="#" className="header-header-name login-header"><span className="header-first-word">My</span> Clipo</Navbar.Brand>
        <Row className="mb-3">
            <Row>
                <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="name" value={fname} onChange={(e) => setfName(e.target.value)} />
                </Col>
                <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="name" value={lname} onChange={(e) => setlName(e.target.value)} />
                </Col>

            </Row>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
        </Row>
        <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" onClick={() => submitSignupHandler(fname, lname, email, password, navigate, pathName)}>
            Submit
        </Button>
        <Link to="/login" state={{ pathName }}>
            Have an account already?
        </Link>
    </Form>
}