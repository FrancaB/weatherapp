import React, {useState}from 'react'
import {Link, } from 'react-router-dom'
import {Form, FormGroup, FormLabel, FormControl, Button, Container} from 'react-bootstrap'
import SearchWeather from './SearchWeather'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function LogIn() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [LoggedIn, setLoggedIn] = useState(false);


    const handleEmail =(e)=> {
        setEmail(e.target.value);
        console.log(email)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }
    
     function handleLogIn(event) {
        event.preventDefault();
        if (email === "aseda@gmail.com" && password === "339") {
          setLoggedIn(true);
         }
    }            

    return (
        <div className = "App">
            { LoggedIn ? (
                <>
                {SearchWeather}
                </>
            ):(
            <>
            <Container>
                    <Form onSubmit= {handleLogIn}>
                    <h1>Log In</h1>
                        <FormGroup>
                            <FormLabel> Email Address </FormLabel>
                            <FormControl 
                            type= 'email'  
                            placeholder= 'example@email.com'
                            onChange = {handleEmail}
                            />
                            </FormGroup>
                        <FormGroup>
                            <FormLabel> Password </FormLabel>
                            <FormControl 
                            type= 'password'  
                            placeholder= 'Password'
                            onChange = {handlePassword}
                            />
                        </FormGroup>
                            <Button onClick = {handleLogIn}>Log In<span><Link to= '/searchweather'> 
                                </Link></span></Button>
                            <p>Don't have an account? Sign Up 
                                <span><Link to= '/signup'> 
                                <p>here</p></Link></span></p>
                        </Form>
            </Container>
            </>
                )
            }    
        </div>
    )
}

