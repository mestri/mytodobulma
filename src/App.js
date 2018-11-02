import React, { Component } from 'react';
import '../node_modules/bulma/css/bulma.css';
import '../node_modules/bulma-extensions/dist/css/bulma-extensions.min.css'
import './bulmaswatch.min.css';
import './App.css';
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import Profile from './components/Profile';
import About  from './components/About';
import {todos} from './todos.json';

/*console.log(todos);*/

class App extends Component {
  constructor(){
    super();

    this.state = {
      todos,
      modalVisibility: 'hidden',
      modalDisplay: "none",
      profileVisibility: 'hidden',
      profileDisplay: "none",
      aboutVisibility: 'hidden',
      aboutDisplay: "none",
      title: 'myTODO'
    };
    /*para que no pierda el scope */
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openProfile = this.openProfile.bind(this);
    this.closeProfile = this.closeProfile.bind(this);
    this.openAbout = this.openAbout.bind(this);
    this.closeAbout = this.closeAbout.bind(this);
  }

  handleAddTodo(todoEl){
    this.setState({
      modalVisibility: "hidden",
      modalDisplay: "none",
      /*se enlaza los datos a los todos del estado*/ 
      todos: [
        ...this.state.todos, 
        todoEl
      ]
    })
  }
    /*console.log(todos);*/


  openModal(){
     this.setState({
       modalVisibility: 'visible',
       modalDisplay: 'block'
     })
  }

  closeModal(){
    this.setState({
      modalVisibility: "hidden",
      modalDisplay: "none"
    })
 }

 openProfile(){
  this.setState({
    profileVisibility: 'visible',
    profileDisplay: 'block'
  })
}

closeProfile(){
  this.setState({
    profileVisibility: "hidden",
    profileDisplay: "none"
  })
}

 openAbout(){
    this.setState({
      aboutVisibility: 'visible',
      aboutDisplay: 'block'
    })
 }

  closeAbout(){
    this.setState({
      aboutVisibility: "hidden",
      aboutDisplay: "none"
    })
 }


  removeTodo(index){
    if (window.confirm('Are you sure you want to delete this Task?')){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  completeTodo(index){
    if (window.confirm('Are you sure you want to mark as completed this Task?')){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
    }
  }
 
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return(
        <div className="columns">         
          <div className="column">
            <div className="card-header">
            <div className="card-header-icon">
                <button type="button" 
                  className="button "
                  onClick={this.completeTodo.bind(this, i)}>
                  <i className="fa fa-check"></i>                   
                </button>             
              </div> 

              <h5 className="card-header-title">{todo.title}</h5>
              <div className="card-header-icon">
                <button 
                  type="button" 
                  className="button" 
                  onClick={this.removeTodo.bind(this, i)}>
                  <i className="fa fa-times"></i>                   
                </button>
              </div>

            </div>
            <div className="card-content">
              <p className="content">{todo.description}</p>
            </div>
            <div className="card-footer">
              <p className="content">
                <span className="float-left text-secondary">
                  {todo.responsible}
                </span>
                <span className="float-right text-success font-italic">
                  {todo.priority}
                </span>
              </p>
              
            </div>
          </div>
        </div>
      )
    }

    )
    return (
      <div className="App">
        <Navigation modalHandler={this.openModal} profileHandler={this.openProfile} aboutHandler={this.openAbout} title={this.state.title} cont={this.state.todos.length}/>
        
        <div className="container">
          <div className="row mt-4">
            <div className="col md-3" style={{display: this.state.modalDisplay, visibility: this.state.modalVisibility}}>
              
              <TodoForm mmodalHandler={this.closeModal} onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="col md-3" style={{display: this.state.profileDisplay, visibility: this.state.profileVisibility}}>
              
              <Profile profileHandler={this.closeProfile}/>
            </div>
            <div className="col md-3" style={{display: this.state.aboutDisplay, visibility: this.state.aboutVisibility}}>
              
              <About aboutHandler={this.closeAbout}/>
            </div>
            <div className="col md-9">
              <div className="row">
                {todos}
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
