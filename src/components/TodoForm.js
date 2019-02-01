import React, {Component} from 'react';

class TodoForm extends Component{
    constructor(){
        super();
        this.default = {
            title: '',
            responsible: '',
            description: '',
            priority: 'Low'
        };
        this.state = this.default;
        this.handleInput = this.handleInput.bind(this);
        /*enlaza el metodo handleInput a los estados, para que no pierda el scope de la app*/
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleInput(e){
        /*console.log(e.target.value, e.target.name);*/
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
        /*console.log(this.state);*/
    }
    handleSubmit(e){
        /*el metodo preventDefault evita que se refresque el navegador al presionar el boton del formulario*/
        e.preventDefault();
        //console.log(this.state);
        /*recibe los datos del formulario */
        this.props.onAddTodo(this.state);
        this.setState(this.default);
    }
    render(){
        return(
            <div className="modal is-active" id="myModal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <h5 className="modal-card-title">Add new Task</h5>
                    <div className="delete">
                        <p>
                            <button type="button" className="delete" onClick={this.props.mmodalHandler}>
                                <i className="fa fa-times"></i>
                            </button>
                        </p>
                    </div>
                    </header>
                    <form className="modal-card-body" onSubmit={this.handleSubmit}>
                        
                        <div className="columns">
                            <div className="column">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        value={this.state.title}
                                        name="title"
                                        onChange={this.handleInput}
                                        className="input"
                                        placeholder="Title Task"
                                    />
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        value={this.state.description}
                                        name="description"
                                        className="input"
                                        placeholder="Description"
                                        onChange={this.handleInput}
                                    />
                                </div>
                            </div>
                            <div className="column">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        value={this.state.responsible}
                                        name="responsible"
                                        className="input"
                                        placeholder="Responsible"
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <br></br>
                                <input
                                    type="date"
                                    name="dueDate"
                                    className="input"
                                    onChange={this.handleInput}
                                />
                            </div>
                        </div>   
                        <div className="form-group">
                            <div className="field is-horizontal">
                                <div className="field-label">
                                    <label className="label">Priority</label>
                                </div>
                                <div className="field-body">
                                    <div className="field is-narrow">
                                        <div className="control">
                                            <label className="radio">
                                                <input
                                                    type="radio"
                                                    name="priority"
                                                    value="Low"
                                                    onChange={this.handleInput}
                                                    checked
                                                /> Low
                                            </label>
                                            <label className="radio">
                                                <input                                                
                                                    type="radio"
                                                    name="priority"
                                                    value="Medium"
                                                    onChange={this.handleInput}
                                                /> Medium
                                            </label>
                                            <label className="radio">
                                                <input
                                                    type="radio"
                                                    name="priority"
                                                    value="High"
                                                    onChange={this.handleInput}
                                                /> High
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <footer className="modal-card-foot">
                            <button className="button is-dark" type="submit">
                                Add Task
                            </button>
                        </footer>
   
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoForm;