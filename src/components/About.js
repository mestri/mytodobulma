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
            <div className="card border border-info">
                <div className="card-body">
                    <div className="float-right">
                        <p>
                            <button type="button" className="btn btn-light" onClick={this.props.aboutHandler}>
                                <i className="fa fa-close"></i>
                            </button>
                        </p>
                    </div>
                    <ul>
                        {this.state.names.map(name =>
                            <li key={name}>{name}</li>    
                        )}                        
                    </ul>
                </div>

            </div>
        )
    }
}

export default About;