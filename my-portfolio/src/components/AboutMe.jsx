import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';



function AboutMe(props) {
    return (
        <>
            <div>
                <h2>{props.title}</h2>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="https://wdverse.github.io/My-Portfolio/assets/images/emmanuel-appiagyei.jpeg" rounded width={180}/>
                        </Col>
                    </Row>
                </Container>
                <div>
                    <div>
                        Hello there! I'm a passionate full stack web developer with a relentless curiosity for all things tech. Currently pursuing a Master of Applied Science degree in Technology Innovation Management at Carleton University, I thrive on creating seamless digital experiences and exploring innovative solutions.
                        <div>With a strong foundation in both front-end and back-end development, I'm dedicated to pushing the boundaries of what's possible in the digital realm.</div>
                        <div>Let's build the future together, one line of code at a time.</div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutMe;