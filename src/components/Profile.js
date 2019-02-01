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

            <div className="column is-half">
                <article className="message is-success">
                    <div className="message-header">
                        <p>
                            <button type="button" className="delete" onClick={this.props.profileHandler}>
                                <i className="fa fa-close"></i>
                            </button>
                        </p>
                    </div>
                    <div className="message-body">
                        {this.state.profile.login}
                        <br></br>
                        <br></br>

                        {this.state.profile.public_repos}
                        <br></br>
                        <br></br>

                        {this.state.profile.url}
                    </div>
                    
                </article>

            </div>
        )
    }
}

export default Profile;