// Importing necessary styles and components
import Nav from "react-bootstrap/Nav";
import "../styles/Navigation.css";

// Define a functional component called Navigation that takes 'pages', 'setCurrentPage', and 'currentPage' as props
function Navigation({ pages, setCurrentPage, currentPage }) {
    return (
        // Navigation component using Bootstrap's Nav
        <Nav variant="underline" className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Nav.Link
                    className="link"
                    href="#about-me"
                    onClick={() => setCurrentPage("about")}
                >
                    About Me
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link
                    className="link"
                    href="#portfolio"
                    onClick={() => setCurrentPage("portfolio")}
                >
                    Portfolio
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link
                    className="link"
                    href="#contact"
                    onClick={() => setCurrentPage("contact")}
                >
                    Contact
                </Nav.Link>
                
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    className="link"
                    href="#resume"
                    onClick={() => setCurrentPage("resume")}
                >
                    Resume
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

// Export the Navigation component as the default export of this module
export default Navigation;
