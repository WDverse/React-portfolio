import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Project(props) {
  return (
    <Row xs={1} md={2} className="g-4">
      <h2 style={{ width: 1000 }}>{props.title}</h2>
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            {/* <Card.Img variant="top" src="https://www.celoxis.com/cassets/img/pmc/project-management.png" /> */}
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a description of the project
              </Card.Text>
              <Button href="#">Live Link</Button> <Button type="submit">GitHub Repo</Button>{' '}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Project;