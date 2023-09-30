import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact(props) {
    return (
        <div style={{backgroundColor:"#087F8C"}}>
            <h2>{props.title}</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder='Enter name'required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" placeholder='Enter email'required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Enter message'required/>
                </Form.Group>
                <Button variant ="dark" as="input" type="submit" value="Submit" />{' '}
            </Form>
        </div>
    )
};

export default Contact;