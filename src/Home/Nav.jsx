import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import { Link} from 'react-router-dom'

function Navbars() {
  return (
    <>
      <Navbar bg='blue' data-bs-theme="white" className='ul mt-3'>
        <Container className='li fw-bold '>
          <Navbar.Brand>ITS</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link>REGISTER</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
}

export default Navbars;