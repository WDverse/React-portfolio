import Card from 'react-bootstrap/Card';
import '../styles/Header.css'
// import header from '../assets/images/header.jpg'

function Header(props) {
    return (
        <Card>
            <Card.Header style={{backgroundColor:"#087F8C"}}>
                <Card.Body>
                <h2 className='header'>Emmanuel Appiagyei</h2>
                {props.children}
                </Card.Body>
            </Card.Header>
        </Card>
    );
}

export default Header;