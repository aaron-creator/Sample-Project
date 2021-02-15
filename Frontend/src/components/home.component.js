import React , {Component} from "react";

export default class Home extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="bg-holder">
                <div className ="jumbotron vertical-align">
                    <div className="container white-text">
                    <h1 class="display-4">Hello, Everyone!</h1>
                            <p class="lead">This is a place for students who are interested in learning can find there best courses to brighten there future.</p>
                            <hr class="my-4"/>
                            <p>To start learning, Click the Register Button to upload your Student Porfolio.</p>
                            <p class="lead">
                                <a class="btn btn-primary btn-lg" href="/register" role="button">Register</a>
                            </p>
                    </div>
                </div>
            </div>
        );
    }
}
