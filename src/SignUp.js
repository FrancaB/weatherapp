import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Form, FormGroup, FormLabel, FormControl, Button, Container} from 'react-bootstrap'

function SignUp() {

    const[email,setEmail]= useState("")
        const handleEmail=(e) =>{
            setEmail(e.target.value)
            console.log(setEmail)
        }
    const[password,setPassword]= useState("")
        const handlePassword= (e) =>{
            setPassword(e.target.value)
            console.log(setPassword)
        }

    return (
        <div className= 'App'>
            <Container>
            <Form>
            <h1>Sign Up</h1>
                    <FormGroup>
                        <FormLabel> Email Address </FormLabel>
                        <FormControl 
                        type= 'email'  
                        placeholder= 'example@email.com' 
                        value= {email}
                        onChange= {handleEmail}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel> Password </FormLabel>
                        <FormControl 
                        type= 'password'  
                        placeholder= 'Password'
                        value= {password}
                        onChange= {handlePassword}
                        />
                    </FormGroup>
                    <Button>Sign Up</Button>
                        <p>Already have an account? Log In
                            <span><Link to= '/login'> 
                            <p>here</p></Link></span></p>
            </Form>
        </Container>
        </div>
    )
}

export default SignUp
