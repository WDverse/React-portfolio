import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/Project.css"
import Button from 'react-bootstrap/Button';
import workDay from '../assets/images/workday.png'
import quiz from '../assets/images/quiz.png'
import tourist from '../assets/images/tourist.png'
import noteTaker from '../assets/images/note.png'
import text from '../assets/images/text.png'
import weather from '../assets/images/weather.png'

function Project(props) {
  return (

    <Row xs={1} sm={2} md={2} lg={3} className="g-4">
      <h2 className="portfolio-title" style={{ width: "100%" }}>Portfolio</h2>
      <Col >
        <Card className="img">
          <Card.Img variant="top" src={workDay} height={"270"} />
          <Card.Body style={{ backgroundColor: "#087F8C" }}>
            <Card.Title className="text">Workday Scheduler</Card.Title>
            <Card.Text className="text">
              HTML/CSS/jQuery

            </Card.Text>
            <Button variant="dark" href="https://wdverse.github.io/Work-Day-Scheduler/">Live Link</Button> <Button variant="dark" href="https://github.com/WDverse/Work-Day-Scheduler">GitHub Repo</Button>{' '}
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="img">
          <Card.Img variant="top" src={quiz} height={"270"} />
          <Card.Body style={{ backgroundColor: "#087F8C" }}>
            <Card.Title className="text">Code Quiz Challenge</Card.Title>
            <Card.Text className="text">
              HTML/CSS/JavaScript

            </Card.Text>
            <Button variant="dark" href="https://wdverse.github.io/Code-Quiz-Challenge/">Live Link</Button> <Button variant="dark" href="https://github.com/WDverse/Code-Quiz-Challenge">GitHub Repo</Button>{' '}
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="img">
          <Card.Img variant="top" src={tourist} height={"270"} />
          <Card.Body style={{ backgroundColor: "#087F8C" }}>
            <Card.Title className="text">Tourist Trap</Card.Title>
            <Card.Text className="text">
              HTML/CSS/Bootsrap/JavaScript

            </Card.Text>
            <Button variant="dark" href="https://wdverse.github.io/Tourist-trap/">Live Link</Button> <Button variant="dark" href="https://github.com/WDverse/Tourist-trap">GitHub Repo</Button>{' '}
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="img">
          <Card.Img variant="top" src={noteTaker} height={"270"} />
          <Card.Body style={{ backgroundColor: "#087F8C" }}>
            <Card.Title className="text">Note Taker</Card.Title>
            <Card.Text className="text">
              HTML/CSS/JavaScript/Node.js/Express.js

            </Card.Text>
            <Button variant="dark" href="https://my-quick-note-bc48bbc27ea1.herokuapp.com">Live Link</Button> <Button variant="dark" href="https://github.com/WDverse/Note-taker">GitHub Repo</Button>{' '}
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="img">
          <Card.Img variant="top" src={weather}height={"270"} />
          <Card.Body style={{ backgroundColor: "#087F8C" }}>
            <Card.Title className="text">Weather Dashboard</Card.Title>
            <Card.Text className="text">
              Project Description

            </Card.Text>
            <Button variant="dark" href="https://wdverse.github.io/Weather-Dashboard/">Live Link</Button> <Button variant="dark" href="https://github.com/WDverse/Weather-Dashboard">GitHub Repo</Button>{' '}
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="img">
          <Card.Img variant="top" src={text} height={"270"} />
          <Card.Body style={{ backgroundColor: "#087F8C" }}>
            <Card.Title className="text">Text Editor</Card.Title>
            <Card.Text className="text">
              HTML/CSS/JavaScript/Node.js/Express.js
            </Card.Text>
            <Button variant="dark" href="https://edityourtexthere-d4cbb3200683.herokuapp.com">Live Link</Button> <Button variant="dark" href="https://github.com/WDverse/Text-Editor">GitHub Repo</Button>{' '}
          </Card.Body>
        </Card>
      </Col>
    </Row>

  );
}

export default Project;