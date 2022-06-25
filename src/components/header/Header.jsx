import { Navbar, Button, FormControl,Container,Offcanvas,Nav,NavDropdown,Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./header.css"
export function ClipoHeader() {
    return <>
    {['xxl'].map((expand) => (
      <Navbar key={expand} bg="light" expand={expand} className="mb-3 navbar-all">
        <Container fluid>
          <Navbar.Brand href="#" className="header-header-name"><span className="header-first-word">My</span> Clipo</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Cliop
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Subscriptions</Nav.Link>
                <NavDropdown
                  title="More"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Account Infromation</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Liked Videos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    WatchLater
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action6">
                   Signout/Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
}
