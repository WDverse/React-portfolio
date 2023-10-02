import Nav from 'react-bootstrap/Nav';
import '../styles/Navigation.css'

function Navigation() {

    const handleClick = (page) => {
         switch(page){
            case "about":
            break;
            
         }
        
    }

    return (
        <Nav variant="underline" className="justify-content-end" activeKey="/home">
            <Nav.Item >
                <Nav.Link className='link' href="#about-me" onClick={handleClick('about')}>About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='link' href="#portfolio"onClick={handleClick("portfolio")}>Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='link' href="#contact"onClick={handleClick("contact")}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='link' href="#resume"onClick={handleClick("resume")}>Resume</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;