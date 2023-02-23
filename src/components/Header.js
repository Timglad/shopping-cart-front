import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header({ logout }) {
  return (

    <Navbar bg="light" variant="light">
    <Container>

      <Nav className="me-auto">

        <Nav.Item>
        <Nav.Link as={Link} to="/products"><h2>Products</h2></Nav.Link>
        </Nav.Item>

        <Nav.Item>
        <Nav.Link as={Link} to="/cart"><h2>Cart</h2></Nav.Link>
        </Nav.Item>

        <Nav.Item>
        <Nav.Link as={Link}  to="/login"><h2>LogIn</h2></Nav.Link>
        </Nav.Item>

        <Nav.Item>
        <Nav.Link as={Link} onClick={logout} to="/"><h2>Logout</h2></Nav.Link>
        </Nav.Item>

      </Nav>
    </Container>
  </Navbar>
  )
}
export default Header