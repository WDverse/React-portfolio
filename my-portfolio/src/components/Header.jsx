import Card from 'react-bootstrap/Card';

function Header(props) {
    return (
        <Card>
            <Card.Header>
                <h1>{props.name}</h1>
                <Card.Body>
                {props.children}
                </Card.Body>
            </Card.Header>
        </Card>
    );
}

export default Header;