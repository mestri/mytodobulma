import React, {Component} from 'react';

class Navigation extends Component {
    

    render(){
        return(
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="subtitle is-3" href="">{this.props.title}</a>
                </div>
                <div className="navbar-start">
                    <div className="navbar-item">
                        <button 
                            type="button" 
                            className="button is-success"
                            data-target="#myModal"
                            onClick={this.props.modalHandler}>
                            + Task 
                        </button>
                    </div>
                    <div className="navbar-item pagination is-rounded is-small">
                        <span className="pagination-link is-current">
                            {this.props.cont}
                        </span>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <button 
                            type="button" 
                            className="button field is-primary is-large tooltip is-tooltip-left" data-tooltip="Profile"
                            onClick={this.props.profileHandler}>
                            <i className="fa fa-user is-small"></i>
                        </button>
                    </div>
                    <span className="ml-2">
                    <p></p>
                    </span>
                    <div className="navbar-item">
                        <button 
                            type="button" 
                            className="button field is-primary is-large tooltip is-tooltip-left" data-tooltip="About"
                            onClick={this.props.aboutHandler}>
                            <i className="fa fa-info"></i>
                        </button>
                    </div>
                </div>
            </nav> 
        )
    }
}

export default Navigation;