import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
const register = {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    padding: "20px",
    borderRadius: "10px",
}




const Forms = () => {
    const auth = getAuth();

    const [emailuser, setEmailuser] = useState('');
    const [passuser, setPassuser] = useState('');


    // Funcrtion  start 
    const handleEmail = (event) => {
        setEmailuser(event.target.value)
    }
    const handlePassword = e => {
        setPassuser(e.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        console.log("Form Submit", "Email", emailuser, "password", passuser);
        createUserWithEmailAndPassword(auth, emailuser, passuser)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <div style={register} className=' w-25 mx-auto'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Forms;