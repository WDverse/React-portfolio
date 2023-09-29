import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact(props) {
    return (
        <>
            <h2>{props.title}</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button as="input" type="submit" value="Submit" />{' '}
            </Form>
        </>
    )
};

export default Contact;