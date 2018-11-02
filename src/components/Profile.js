import React, {Component} from 'react';
import axios from 'axios';


class Profile extends Component{
    constructor(){
        super();

        this.state = {
            profile: []
        }

        axios.get("https://api.github.com/users/mestri")
        .then(response => {
            this.setState({
                profile: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    render(){
        return(
            <div className="card border border-warning">
                <div className="card-body">
                    <div className="float-right">
                        <p>
                            <button type="button" className="btn btn-light" onClick={this.props.profileHandler}>
                                <i className="fa fa-close"></i>
                            </button>
                        </p>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        {this.state.profile.login}
                    </div>
                    <div>
                        {this.state.profile.public_repos}
                    </div>
                    <div>
                        {this.state.profile.url}
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default Profile;