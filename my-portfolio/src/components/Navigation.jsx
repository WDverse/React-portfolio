import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <Nav variant="underline" className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="#about-me">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#resume">Resume</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;