import Card from 'react-bootstrap/Card';
import '../styles/Header.css'

function Header(props) {
    return (
        <Card >
            <Card.Header style={{backgroundColor:"#087F8C"}}>
                <Card.Body className='header-size' >
                <h1 className='header'>Emmanuel Appiagyei DEBUG</h1>
                {props.children}
                </Card.Body>
            </Card.Header>
        </Card>
    );
}

export default Header;