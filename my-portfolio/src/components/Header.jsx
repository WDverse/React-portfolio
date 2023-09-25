import Card from 'react-bootstrap/Card';
import Navigation from './Navigation';

function Header() {
  return (
    <Card>
      <Card.Header as="h5">Emmanuel Appiagyei</Card.Header>
      <Card.Body>
        <Navigation/>
      </Card.Body>
    </Card>
  );
}

export default Header;