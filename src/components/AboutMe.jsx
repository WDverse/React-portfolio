// Importing necessary styles and components
import "../styles/About.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

// Define a functional component called AboutMe that takes 'props' as an argument
function AboutMe() {
  return (
    <>
      <div className="about" style={{ backgroundColor: "white" }}>
        <h2 className="about-me">About Me</h2>
        <Container>
          <Row>
            <div className="typewriter">
              <h1>I create web experiences.</h1>
            </div>
            <Col xs={6} md={4}>
              <Image
                src="https://wdverse.github.io/My-Portfolio/assets/images/emmanuel-appiagyei.jpeg"
                alt="portrait of Emmanuel Appiagyei"
                rounded
                width={180}
              />
            </Col>
          </Row>
        </Container>
        <div className="about-body">
          <div>
            Hello there! I'm a full stack web developer with a relentless drive
            to create seamless web solutions. I hold a certificate in Full Stack
            Web Development from Carleton University, where I gained experience
            in{" "}
            <span>
              HTML, CSS, Bootstrap, JavaScript, React.Js, Node.Js, MongoDB, and more
            </span>
            . In addition, through my ongoing graduate studies in Technology
            Innovation Management at Carleton University, I have acquired software project management
            skills and can work across diverse teams.
            <div>
              With a strong foundation in both frontend and backend development,
              I'm dedicated to pushing the boundaries of what's possible as far
              as web development is concerned.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// Export the AboutMe component as the default export of this module
export default AboutMe;
