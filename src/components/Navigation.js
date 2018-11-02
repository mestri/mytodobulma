import React, {Component} from 'react';

class Navigation extends Component {
    

    render(){
        return(
            <nav className="navbar">
                <a className="navbar-brand field" href="">{this.props.title}</a>
                <div className="navbar-item">
                    <button 
                        type="button" 
                        className="button is-success"
                        onClick={this.props.modalHandler}>
                        + New 
                    </button>
                </div>
                <div className="navbar-item pagination is-rounded">
                    <span className="pagination-link is-current">
                        {this.props.cont}
                    </span>
                </div>
                
                <div className="navbar-item">
                    <button 
                        type="button" 
                        className="button field is-primary is-large tooltip is-tooltip-left" data-tooltip="Profile"
                        onClick={this.props.profileHandler}>
                        <i className="fa fa-user"></i>
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
            </nav> 
        )
    }
}

export default Navigation;