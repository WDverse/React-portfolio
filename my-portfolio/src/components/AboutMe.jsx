import '../styles/About.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function AboutMe(props) {
    return (
        <>
            <div className="about" style={{ backgroundColor: "white" }}>
                <h2 className='about-me'>About Me</h2>
                <Container>
                    <Row>
                    <div className="typewriter">
                            <h1>I create web experiences.</h1>
                        </div>
                        <Col xs={6} md={4}>
                            <Image src="https://wdverse.github.io/My-Portfolio/assets/images/emmanuel-appiagyei.jpeg" rounded width={180} />
                        </Col>
                    </Row>
                </Container>
                <div className='about-body'>
                    <div>
                        Hello there! I'm a full stack web developer with a relentless drive to create seamless web solutions. I'm enrolled in a Carleton University Web Development Bootcamp, where I have gained experience in <span>HTML, CSS, Bootstrap, JavaScript, React.Js, Node.Js and more</span>. In addition, through my ongoing graduate studies in Technology Innovation Management, I have aquired software project managemt skills and can work across diverse teams.
                        <div>With a strong foundation in both front-end and back-end development, I'm dedicated to pushing the boundaries of what's possible as far as web development is concerned.</div>    
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutMe;