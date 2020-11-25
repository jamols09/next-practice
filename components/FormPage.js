import { Form, Button, Col, Row } from 'react-bootstrap'
import { useState } from 'react'

function FormPage() {
    const [rsex, setSex] = useState({ sex: "" })
    console.log(rsex, "useState")
    const { sex } = rsex

    const selS = (e) => {
        setSex(oldVal => ({
            ...oldVal,
            sex: e.target.value
        }))
        //you cannot log immidiately on useState since useState is asynchronous
        //therefore console.log will execute even if its after setting on useState's function
        // console.log(rsex, "oldValue?") 
    }

   return (
    <Form>
        <Row>
            <Col>
                <Form.Group >
                    <Form.Label>Username</Form.Label>
                    <Form.Control id="username" type="text" placeholder="Your username"></Form.Control>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="password" type="password"></Form.Control>
                    <Form.Text className="text-muted">We will encrypt this!</Form.Text>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control id="email" type="email" placeholder="Your email"></Form.Control>
                    <Form.Text className="text-muted">Just some sample inputs</Form.Text>
                </Form.Group>
            </Col>
            <Col>

                <Form.Label>Gender</Form.Label>
                <Form.Group >
                <Row>
                    <Col>
                        <Form.Check
                            value="male"
                            id="maleRadio"
                            type="radio"
                            label="Male"
                            onChange={selS}
                            checked={sex === 'male' ? true : false}
                        />
                    </Col>
                    <Col>
                        <Form.Check
                            value="female"
                            id="femaleRadio"
                            type="radio"
                            label="Female"
                            onChange={selS}
                            checked={sex === 'female' ? true : false}
                        />
                    </Col>
                </Row>
                </Form.Group>
            </Col>
        </Row>
        <Button variant="info" type="submit">Register</Button>
    </Form>
   )
}

export default FormPage