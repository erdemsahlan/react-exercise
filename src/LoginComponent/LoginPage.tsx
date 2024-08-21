import React, { useEffect, useState } from 'react';
import { CardHeader, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { login } from './Services';

export default function LoginPage() {

    const [email, SetEmail] = useState<string>('');
    const [password, SetPassword] = useState<string>('');

    function tryLogin(){
        login(email,password).then((response)=> {
            console.log(response)
            localStorage.setItem("token","Bearer "+response.data.token)
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <Card className='container' style={{}}>
            <Card.Header>
                <Card.Title>LOGİN PAGE</Card.Title>
            </Card.Header>
            <Card.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail Adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=> SetEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e=>SetPassword(e.target.value)}/>
                    </Form.Group>
                    <Button  variant="success" type="submit" onClick={tryLogin}>
                        Login
                    </Button>
            </Card.Body>
        </Card>
    )
}

//zingdigi