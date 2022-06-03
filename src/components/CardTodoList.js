import React, {useEffect, useState} from 'react'
import ListToDo from './ListToDo'

export default function CardTodoList() {
    
    const [task, setTask] = useState(()=>{
        
       const storage = localStorage.getItem('task');
       const initialTask = JSON.parse(storage)

       return initialTask || {task: []}
        
        })

   
  return (
    <div className='card'>
        <div>
            <h3>To Do List</h3>
            <span className='span'>Creado por Hector Enriquez</span>
        </div>
            <ListToDo
            task={task}
            />
    </div>
  )
}
