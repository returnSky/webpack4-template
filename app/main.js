import React,{ Component } from "react";
import { render } from "react-dom";

class Greeter extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                Hello world!
            </div>
        );
    }
}

render(<Greeter/>,document.getElementById('root'));