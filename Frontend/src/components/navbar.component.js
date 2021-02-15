import React , {Component } from "react";
import { Link } from  "react-router-dom";

export default class Navbar extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <nav className = "navbar navbar-dark bg-dark navbar-expand-md">
                <Link to ="/" className = "navbar-brand">SampleApp</Link>
                <div className = "collapse navbar-collapse">
                <ul className = "navbar-nav mr-auto">
                    <li className = "navbar-items">
                       <Link to ="/register" className = "nav-link">Register</Link> 
                    </li>
                    {/*<li className = "navbar-items">
                        <Link to = "/create" className = "nav-link">Create Exercise log</Link> 
                    </li>
                    <li className= "navbar-items">
                        <Link to = "/user" className = "nav-link">Create User</Link>
                    </li>*/}
                </ul>
                </div>
            </nav>
        );
    }
}