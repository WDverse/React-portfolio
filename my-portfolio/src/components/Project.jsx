import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import workDay from '../assets/images/workday.png'
import quiz from '../assets/images/quiz.png'
import tourist from '../assets/images/tourist.png'
import noteTaker from '../assets/images/note.png'
import text from '../assets/images/text.png'

function Project(props) {
  return (

    <Row xs={1} md={3} className="g-4">
      <h1 style={{ width: "100%" }}>Portfolio</h1>
      <Col>
        <Card>
          <Card.Img variant="top" src={workDay} height={"270%"} />
          <Card.Body style={{backgroundColor:"#087F8C"}}>
            <Card.Title>Workday Scheduler</Card.Title>
            <Card.Text>
              Project Description

            </Card.Text>
            <Button variant ="dark" href="https://wdverse.github.io/Work-Day-Scheduler/">Live Link</Button> <Button variant ="dark" href="https://github.com/WDverse/Work-Day-Scheduler">GitHub Repo</Button>{' '}
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={quiz} />
          <Card.Body style={{backgroundColor:"#087F8C"}}>
            <Card.Title>Code Quiz Challenge</Card.Title>
            <Card.Text>
              Project Description

            </Card.Text>
            <Button variant ="dark" href="https://wdverse.github.io/Code-Quiz-Challenge/">Live Link</Button> <Button  variant ="dark" href="https://github.com/WDverse/Code-Quiz-Challenge">GitHub Repo</Button>{' '}
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={tourist} height={"270%"} />
          <Card.Body style={{backgroundColor:"#087F8C"}}>
            <Card.Title>Tourist Trap</Card.Title>
            <Card.Text>
              Project Description

            </Card.Text>
            <Button variant ="dark" href="https://wdverse.github.io/Tourist-trap/">Live Link</Button> <Button variant ="dark" href="https://github.com/WDverse/Tourist-trap">GitHub Repo</Button>{' '}
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={noteTaker} height={"270"} />
          <Card.Body style={{backgroundColor:"#087F8C"}}>
            <Card.Title>Note Taker</Card.Title>
            <Card.Text>
              Project Description

            </Card.Text>
            <Button variant ="dark" href="https://my-quick-note-bc48bbc27ea1.herokuapp.com">Live Link</Button> <Button variant ="dark" href="https://github.com/WDverse/Note-taker">GitHub Repo</Button>{' '}
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src="https://www.celoxis.com/cassets/img/pmc/project-management.png" height={"270"} />
          <Card.Body style={{backgroundColor:"#087F8C"}}>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              Project Description

            </Card.Text>
            <Button  variant ="dark" href="#">Live Link</Button> <Button variant ="dark" type="submit">GitHub Repo</Button>{' '}
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src={text} height={"270"} />
          <Card.Body style={{backgroundColor:"#087F8C"}}>
            <Card.Title>Text Editor</Card.Title>
            <Card.Text>
              Project Description
            </Card.Text>
            <Button variant ="dark" href="https://edityourtexthere-d4cbb3200683.herokuapp.com">Live Link</Button> <Button variant ="dark" href="https://github.com/WDverse/Text-Editor">GitHub Repo</Button>{' '}
          </Card.Body>
        </Card>
      </Col>
    </Row>

  );
}

export default Project;