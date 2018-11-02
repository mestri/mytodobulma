import React, {Component} from 'react';
import axios from 'axios';


class About extends Component{
    constructor(){
        super();

        this.state = {
            names: []
        }

        axios.get("http://localhost:3001/names")
        .then(response => {
            this.setState({
                names: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    render(){
        return(
            <div className="column is-half">
                <div className="message is-black">
                    <div className="message-header">
                        <p>
                            <button type="button" className="delete" onClick={this.props.aboutHandler}>
                                <i className="fa fa-close"></i>
                            </button>
                        </p>
                    </div>
                    <div className="message-body">
                        <ul>
                            {this.state.names.map(name =>
                                <li key={name}>{name}</li>    
                            )}                        
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default About;