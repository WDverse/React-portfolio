// Importing necessary styles and components
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Header.css";

// Define a functional component called Header that takes 'props' as an argument
function Header(props) {
  return (
    <Navbar expand="lg" className="header-container">
      <Container>
        <Navbar.Brand className="header" href="#home">
          <h1>Emmanuel Appiagyei</h1>
        </Navbar.Brand>
        <p></p>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navItems" id="basic-navbar-nav">
          {props.children}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Export the Header component as the default export of this module
export default Header;
