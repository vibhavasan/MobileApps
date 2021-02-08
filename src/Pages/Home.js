import '../App.css'
import React from "react";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
export default function Home(props) {
    return(
        <div className="App">
        <header className="App-header">
        <h1> LOGIN SERVICE </h1>
            <Link to = "/register">
                <Button className = "button userButton">Register</Button>
            </Link>
            <Link to = "/login">
                <Button className = "button loginButton"> Log In </Button> 
            </Link>
        </header>
      </div>
    )
    
  
}
