import React, {useState, useEffect} from 'react'
import {v1 as uuid} from 'uuid'


export default function InputAddTask({setState, setVisible, state}) {
    
    const [task, setTask] = useState();
   


const handleChange = (e) => {
    setTask(e.target.value);
}
const handleSubmit = (e) => {
    e.preventDefault();
    setState(state.task = [...state.task ,{id: uuid(), task: task, completed: false}]);
    localStorage.setItem('task', JSON.stringify(state));
    setVisible(false)
}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Write a task" onChange={handleChange}/>
        <input type="submit"/>
    </form>
  )
}
