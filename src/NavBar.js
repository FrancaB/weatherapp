import React from 'react'
import {Navbar,Nav, Col} from 'react-bootstrap'
import LogIn from './LogIn'
import './App.css'
import SignUp from './SignUp'

export default function NavBar(props) {
    return (
        <div className= "row">
            <Col>
            <Nav className="mr-auto">
                <Navbar.Brand>
                    <Nav.Link href = "/">
                        <h2 className="title">WEATHER</h2>
                    </Nav.Link>
                </Navbar.Brand>
            </Nav>
            </Col>
            
            <Col xs md="5">
                <Nav className="mr-auto"> 
                    <Nav.Item>
                        <form className="region" onSubmit={(e)=> props.changeWeather(e)}>
                            <input className= "regioninput" placeholder= "Enter City" onChange= {(e) =>
                            {props.changeRegion (e.target.value)}}/> 
                        </form>
                    </Nav.Item>               
                    <Nav.Link href ="/signup" component= {SignUp}><h4 className="title">Sign Up</h4></Nav.Link>
                    <Nav.Link href ="/login" component= {LogIn}><h4 className="title">Log In</h4></Nav.Link>
                </Nav>
            </Col>
        </div>
    )
}
