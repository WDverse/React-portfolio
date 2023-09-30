import Card from 'react-bootstrap/Card';

function Header(props) {
    return (
        <Card>
            <Card.Header>
                <Card.Body>
                {props.children}
                </Card.Body>
            </Card.Header>
        </Card>
    );
}

export default Header;