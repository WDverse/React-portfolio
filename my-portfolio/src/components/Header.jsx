import Card from 'react-bootstrap/Card';
// import header from '../assets/images/header.jpg'

function Header(props) {
    return (
        <Card>
            <Card.Header style={{backgroundColor:"#087F8C"}}>
                <Card.Body>
                {props.children}
                </Card.Body>
            </Card.Header>
        </Card>
    );
}

export default Header;