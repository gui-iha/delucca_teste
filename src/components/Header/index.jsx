import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/logo.jpeg";

function Header() {
    return (
        <>
            {["md"].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className="bg-body-tertiary mb-3"
                >
                    <Container fluid>
                        <img src={logo} alt="" width="70" height="70" />
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">
                                        Quem somos
                                    </Nav.Link>
                                    <NavDropdown
                                        title="Produtos"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action6">
                                            Linha profissional
                                        </NavDropdown.Item>
                                        {/* <NavDropdown.Item href="#action7">
                      Linha profissional
                    </NavDropdown.Item> */}
                                        <NavDropdown.Divider />
                                        {/* <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item> */}
                                    </NavDropdown>

                                    <Nav.Link href="#action3">
                                        Quem somos
                                    </Nav.Link>
                                    <Nav.Link href="#action4">Contato</Nav.Link>
                                    <Nav.Link href="#action5">
                                        Area do cliente
                                    </Nav.Link>
                                </Nav>
                                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Header;
