import { Form, Button, Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { render } from 'react-dom'

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

    const [validPass, setValidPass] = useState(false);
    const [password, setPass] = useState({ password: '', confirm_password: ''})
    
    useEffect(() => {
        setValidPass(password.password === password.confirm_password && password.confirm_password)
    }, [password.password, password.confirm_password]) //be specific when what value you will track when using useEffect

    useEffect(() => {
        if(validPass) {
            setData(prevData => ({
                ...prevData,
                password: password.password
            }))
        }
    },[validPass])//The last parameter of the useEffect is called a dependency array.  When an object is modified the effect will trigger.  

    // you cannot log immidiately on useState since useState is asynchronous
    // therefore console.log will execute even if its after setting on useState's function
    // console.log(rsex, "oldValue?")
    // const selS = (e) => {
    //     setSex(oldVal => ({
    //         ...oldVal,
    //         sex: e.target.value
    //     }))
    // }

    const handleInput = (input,e) => {
        // sample
        // const key = "123"
        // const obj = {
        //     [key] : [key] //the key = '123', value = [0] => '123'
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

    const PasswordNotif = (e) => {
        if(!validPass && password.confirm_password) {
            return (
                <Form.Text className="text-danger">Password should be same</Form.Text>
            )
        } else {
            if(password.confirm_password) {
                return (
                    <Form.Text className="text-success">Confirmed</Form.Text>
                )
            }
            return ('')
        }
    }

    const isDisabled = (e) => {
        if(!validPass) {
            return 'disabled'
        }
        else {
            return ''
        }
    }

    /**
     * 
     * You can write your components as pure functions or as classes. 
     * When writing you components as classes, you have to have a render method defined on that class. 
     * If you are writing the component as a pure function, you can just return the markup/jsx that the component should render.
     */

    return (
        
        <Form onSubmit={handleSubmit}>
            <p>View the code to learn more. The name field has different implementation as the other field. Also radio buttons has extra steps to make it work</p>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control id="username" name="username" type="text" onChange={(e) => handleInput('username',e)} placeholder="Your username"></Form.Control>
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
                        {/* if password not the same */}
                        {<PasswordNotif/>}
                        {/* else do not show */}
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
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control id="birth" name="birth" type="date" onChange={(e) => handleInput('birth', e)}></Form.Control>
                    </Form.Group>
                </Col>
                <Col></Col>
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
            <Button variant="info" type="submit" disabled={!validPass}>Register</Button>
        </Form>
    )

}

export default FormPage

/**
 * useEffect is going to do a referential equality check on options between every render,
 * and thanks to the way JavaScript works, options will be new every time so when React tests
 * whether options changed between renders it'll always evaluate to true, meaning the useEffect
 * callback will be called after every render rather than only when bar and baz change.
 * 
 * https://kentcdodds.com/blog/usememo-and-usecallback
 * 
 * https://gist.github.com/migsc/8f502b5ba1fa376b93a843aaef236828
 */