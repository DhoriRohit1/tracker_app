
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{ background: '#333333' }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
         Habit
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-light nav-link dashboard-link">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/manage-habits" className="text-light nav-link manage-habits-link">Manage Habits</Nav.Link>
            <Nav.Link as={Link} to="/tracker" className="text-light nav-link tracker-link">Tracker</Nav.Link>
            <Nav.Link as={Link} to="/notification" className="text-light nav-link notification-link">Notification</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
