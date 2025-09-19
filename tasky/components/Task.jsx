import React from 'react';

const Task = (props) => {
    return (
        <div className="card">
            <p>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <div className='description'><p>{props.description}</p></div>
            <div className='priority'><p>{props.priority}</p></div>
            <button onClick={props.markDone}>Done</button>


            
        </div>
    )




}




export default Task;

