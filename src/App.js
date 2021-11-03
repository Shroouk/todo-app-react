
import { Component } from 'react';
import './App.css';


import AddItem from './components/add-Item/addItem'
import Todo from './components/todo-Items/todoItems';

class App extends Component {
  state={
    tasks:[
    
    ]
  }

  

  deleteTask = (id)=>{
    /* let tasks = this.state.tasks;
    let i = tasks.findIndex(task=> task.id === id)
    tasks.splice(i,1)
    this.setState({tasks}) */
    let tasks = this.state.tasks.filter(task=>{
      return task.id !== id
    })
    this.setState({tasks})
  }

  addTask = (task)=>{
    task.id= Math.random();
    let tasks = this.state.tasks;
    tasks.unshift(task);
    this.setState({tasks})
  }


  handleClick= (event)=>{
  event.target.classList.toggle('done');
  }
 

  render(){
    console.log(this.state.tasks);
  return (
    <div className="App">
      <div className="container text-center mt-5 mb-3">
      <h1>Todo List</h1>
      </div>
      
      <AddItem addTask={this.addTask}/>
      <Todo tasks={this.state.tasks} deleteTask={this.deleteTask}  handleClick={this.handleClick}/>
    </div>
  );
}
}

export default App;
