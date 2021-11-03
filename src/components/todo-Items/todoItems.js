import React from 'react';
import './todoItems.css'

const Todo = (props)=>{
    //const {tasks, deleteTask} = props;
    const {tasks} = props;
    const deleteTask = props.deleteTask;
    console.log('taskslength'+tasks)
    console.log('taskslength'+Object.keys(props.tasks))
   
     //const handleCheck = props.handleCheck;
     const handleClick = props.handleClick;

     


    
    let lenght = Object.keys(props.tasks).length;
    const tasksList = lenght ? (
        tasks.map(task=>{
            return(
                <div className="container" key={task.id}>
                <ul className="list-group todos mx-auto text-light">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span onClick={handleClick} className="taskname">{task.name}</span>
                    <span className="taskdays">{task.days}- Days</span>
                    <span className="delete" onClick={()=>deleteTask(task.id)}>&times;</span>
                </li>
         
                </ul>
                </div>
            )
        })
    ) : (
        
        <div className="container text-center">
            <p className="notaskstxt">There is no tasks to show</p>
        </div>
    )
   
    return(
        <div>
            {tasksList}
        </div>
    )
}

export default Todo;