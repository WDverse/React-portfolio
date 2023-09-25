import Card from 'react-bootstrap/Card';
import Navigation from './Navigation';

function Header(props) {
    return (
        <Card>
            <Card.Header as="h5">
                <h1>{props.name}</h1>
                </Card.Header>
            <Card.Body>
                <Navigation />
            </Card.Body>
        </Card>
    );
}

export default Header;