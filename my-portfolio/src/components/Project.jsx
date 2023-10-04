// Importing necessary components and styles
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/Project.css";
import Button from "react-bootstrap/Button";
import workDay from "../assets/images/workday.png";
import quiz from "../assets/images/quiz.png";
import tourist from "../assets/images/tourist.png";
import noteTaker from "../assets/images/note.png";
import text from "../assets/images/text.png";
import weather from "../assets/images/weather.png";

// Define a functional component called Project
function Project() {
  return (
    // Row with responsive column layout
    <Row xs={1} sm={2} md={2} lg={3} className="g-4">
      <h2 className="portfolio-title" style={{ width: "100%" }}>
        Portfolio
      </h2>
      <Col>
        <Card className="img">
          <Card.Img
            variant="top"
            src={workDay}
            alt="screenshot of the empty Workday Scheduler web app"
            height={"270"}
          />
          <Card.Body style={{ backgroundColor: "#087F8C" }}>
            <Card.Title className="project-text">Workday Scheduler</Card.Title>
            <Card.Text className="project-text">
              A simple calendar app built with HTML, CSS & jQuery
            </Card.Text>
            <Button
              variant="dark"
              href="https://wdverse.github.io/Work-Day-Scheduler/"
            >
              Live Link
            </Button>{" "}
            <Button
              variant="dark"
              href="https://github.com/WDverse/Work-Day-Scheduler"
            >
              GitHub Repo
            </Button>{" "}
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="img">
          <Card.Img
            variant="top"
            src={quiz}
            alt="screenshot of the Code Quize Challenege web app showing a javascript question and possible answers"
            height={"270"}
          />
          <Card.Body style={{ backgroundColor: "#087F8C" }}>
            <Card.Title className="project-text">
              Code Quiz Challenge
            </Card.Title>
            <Card.Text className="project-text">
              Code quiz app built with HTML, CSS & JavaScript
            </Card.Text>
            <Button
              variant="dark"
              href="https://wdverse.github.io/Code-Quiz-Challenge/"
            >
              Live Link
            </Button>{" "}
            <Button
              variant="dark"
              href="https://github.com/WDverse/Code-Quiz-Challenge"
            >
              GitHub Repo
            </Button>{" "}
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="img">
          <Card.Img
            variant="top"
            src={tourist}
            alt="screenshot of the Tourist Trap web page Ottawa's with weather and hotel info"
            height={"270"}
          />
          <Card.Body style={{ backgroundColor: "#087F8C" }}>
            <Card.Title className="project-text">Tourist Trap</Card.Title>
            <Card.Text className="project-text">
              Hotel guide for tourists using server-side APIs
            </Card.Text>
            <Button
              variant="dark"
              href="https://wdverse.github.io/Tourist-trap/"
            >
              Live Link
            </Button>{" "}
            <Button
              variant="dark"
              href="https://github.com/WDverse/Tourist-trap"
            >
              GitHub Repo
            </Button>{" "}
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="img">
          <Card.Img
            variant="top"
            src={noteTaker}
            alt="screenshot of the Note Taker web app showing some inputed info"
            height={"270"}
          />
          <Card.Body style={{ backgroundColor: "#087F8C" }}>
            <Card.Title className="project-text">Note Taker</Card.Title>
            <Card.Text className="project-text">
              Simple note pad using Express.js and Node.js
            </Card.Text>
            <Button
              variant="dark"
              href="https://my-quick-note-bc48bbc27ea1.herokuapp.com"
            >
              Live Link
            </Button>{" "}
            <Button variant="dark" href="https://github.com/WDverse/Note-taker">
              GitHub Repo
            </Button>{" "}
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="img">
          <Card.Img
            variant="top"
            src={weather}
            alt="screenshot of the Weather Dashboard web app showing Ottawa's weather and date info"
            height={"270"}
          />
          <Card.Body style={{ backgroundColor: "#087F8C" }}>
            <Card.Title className="project-text">Weather Dashboard</Card.Title>
            <Card.Text className="project-text">
              Weather Dashboard for cities using server-side APIs
            </Card.Text>
            <Button
              variant="dark"
              href="https://wdverse.github.io/Weather-Dashboard/"
            >
              Live Link
            </Button>{" "}
            <Button
              variant="dark"
              href="https://github.com/WDverse/Weather-Dashboard"
            >
              GitHub Repo
            </Button>{" "}
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className="img">
          <Card.Img
            variant="top"
            src={text}
            alt="screenshot of the Text Editor web app showing some edited JavaScript code"
            height={"270"}
          />
          <Card.Body style={{ backgroundColor: "#087F8C" }}>
            <Card.Title className="project-text">Text Editor</Card.Title>
            <Card.Text className="project-text">
              Installable JavaScript Code Editor built with Node.js
            </Card.Text>
            <Button
              variant="dark"
              href="https://edityourtexthere-d4cbb3200683.herokuapp.com"
            >
              Live Link
            </Button>{" "}
            <Button
              variant="dark"
              href="https://github.com/WDverse/Text-Editor"
            >
              GitHub Repo
            </Button>{" "}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

// Export the Project component as the default export of this module
export default Project;
