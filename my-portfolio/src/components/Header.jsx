import Card from 'react-bootstrap/Card';

function Header(props) {
    return (
        <Card>
            <Card.Header>
                <h1>{props.name}</h1>
                </Card.Header>
            <Card.Body>
            </Card.Body>
        </Card>
    );
}

export default Header;