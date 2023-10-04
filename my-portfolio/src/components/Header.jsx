// Importing necessary styles and components
import Card from "react-bootstrap/Card";
import "../styles/Header.css";

// Define a functional component called Header that takes 'props' as an argument
function Header(props) {
  return (
    <Card>

      <Card.Header style={{ backgroundColor: "#087F8C" }}>

        <Card.Body className="header-size">
          <h1 className="header">Emmanuel Appiagyei</h1>
          {props.children}
        </Card.Body>
        
      </Card.Header>

    </Card>
  );
}

// Export the Header component as the default export of this module
export default Header;
