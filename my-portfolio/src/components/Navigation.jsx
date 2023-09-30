import Nav from 'react-bootstrap/Nav';
import '../styles/Navigation.css'

function Navigation() {

    // const handleClick = () => {

    // }

    return (
        <Nav variant="underline" className="justify-content-end" activeKey="/home">
            <Nav.Item >
                <Nav.Link className='link' href="#about-me">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='link' href="#portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='link' href="#contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='link' href="#resume">Resume</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;