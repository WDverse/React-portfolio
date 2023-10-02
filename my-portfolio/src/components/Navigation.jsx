import Nav from "react-bootstrap/Nav";
import "../styles/Navigation.css";

function Navigation({ pages, setCurrentPage, currentPage }) {
    return (
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

export default Navigation;
