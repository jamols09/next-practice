import { Form, Button, Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'

function FormPage() {
    const [data, setData] = useState({
        username: '',
        password: '',
        email: '',
        sex: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        birth: '',
    })
    const { sex } = data

    const [validpass, setPass] = useState({ password: '', confirm_password: '', isValid : false})
    
    useEffect(() => {
        if(validpass.confirm_password) {
            
            if(validpass.password === validpass.confirm_password) {
                setPass(prevState => ({
                    ...prevState,
                    isValid: true
                }))
                
            }
        } 
    }, [validpass])
    //you cannot log immidiately on useState since useState is asynchronous
    //therefore console.log will execute even if its after setting on useState's function
    // console.log(rsex, "oldValue?")
    const selS = (e) => {
        setSex(oldVal => ({
            ...oldVal,
            sex: e.target.value
        }))
    }

    const handleInput = (input,e) => {
        // sample
        // const key = "123"
        // const obj = {
        //     [key] : [key] 
        // }

        setData((prevData) => {
            return {
                ...prevData,
                [input]: e.target.value //[input] means "take whatever string value is in input, and use it as the key here"
            }
        })
   }

    const passValidation = (input,e) => {
        setPass(prevPass => ({
            ...prevPass,
            [input]: e.target.value
        }))
    }   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.post('http://nextserver.test/api/users', data)
            console.log(result, "Result")
        } catch (error) {
            console.log(error)
        }
    }


   

   return (
    
    <Form onSubmit={handleSubmit}>
        <p>View the code to learn more. The name field has different implementation as the other field. Also radio buttons has extra steps to make it work</p>
        <Row>
            <Col>
                <Form.Group>
                    <Form.Label>Username</Form.Label>   
                    <Form.Control id="username" name="username" type="text" onChange={(e) => setData((prevData) => {return {...prevData,name: e.target.value}})} placeholder="Your username"></Form.Control>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control id="email" type="email" name="email" placeholder="Your email" onChange={(e) => handleInput('email',e)} ></Form.Control>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="password" name="password" type="password" onChange={(e) => passValidation('password',e)}></Form.Control>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group >
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control id="confirm_password" name="confirm_password" type="password" onChange={(e) => passValidation('confirm_password',e)}></Form.Control>
                    <Form.Text className="text-danger">Password should be same</Form.Text>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group>
                    <Form.Label>First name</Form.Label>   
                    <Form.Control id="first_name" name="first_name" type="text" onChange={(e) => handleInput('first_name',e)} ></Form.Control>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group >
                    <Form.Label>Middle name</Form.Label>
                    <Form.Control id="middle_name" name="middle_name" type="text" onChange={(e) => handleInput('middle_name',e)} ></Form.Control>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control id="last_name" type="text" name="last_name" onChange={(e) => handleInput('last_name',e)} ></Form.Control>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control id="email" type="email" name="email" placeholder="Your email" onChange={(e) => handleInput('email',e)} ></Form.Control>
                    <Form.Text className="text-muted">Just some sample inputs</Form.Text>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group >
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control id="birth" name="birth" type="date"></Form.Control>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Label>Gender</Form.Label>
                <Form.Group >
                    <Row>   
                        <Col>
                            <Form.Check
                                value="M"
                                id="maleRadio"
                                type="radio"
                                label="Male"
                                onChange={(e) => handleInput('sex', e)}
                                checked={sex === 'M' ? true : false}
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                value="F"
                                id="femaleRadio"
                                type="radio"
                                label="Female"
                                onChange={(e) => handleInput('sex', e)}
                                checked={sex === 'F' ? true : false}
                            />
                        </Col>
                    </Row>
                </Form.Group>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
        </Row>
        <Button variant="info" type="submit">Register</Button>
    </Form>
   )
}

export default FormPage