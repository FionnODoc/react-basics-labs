import React from 'react';

const Task = (props) => {
    return (
          <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>

            <p>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <div className='description'><p>{props.description}</p></div>
            <div className='priority'><p>{props.priority}</p></div>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>



            
        </div>
    )




}




export default Task;

