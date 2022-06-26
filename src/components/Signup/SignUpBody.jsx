import { Form, Row, Col, Button,Navbar } from "react-bootstrap"
import "./Signup.css"
export function SignUpBody() {
    return <Form className="signup-form">
        <Navbar.Brand href="#" className="header-header-name login-header"><span className="header-first-word">My</span> Clipo</Navbar.Brand>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </Row>
        <Row>
            <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First name" />
            </Col>
            <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last name" />
            </Col>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
}