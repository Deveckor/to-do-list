import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

export default function FormList({task, state, setState}) {
    const [form, setForm] = useState(false)
    const [value, setValue] = useState()
    const [update, setUpdate] = useState();
    const handleOnChange = (e) => {
        const id = e.target.id;
        const changeClass = state.task.map(task =>{
            if(id === task.id) {
                if (task.completed === true) {
                    return {...task, completed: false}
                }
                return {...task, completed: true}
            }
            return {...task}
        })
        
        setState(state.task = changeClass);
        localStorage.setItem('task', JSON.stringify(state));
    }
    const handleDelete = (e) =>{
        const id = e.target.id;
        const changeClass = state.task.map(task =>{
            if(id === task.id) {
               
                    return {}
                
               
            }
            return {...task}
        })
        
        setState(state.task = changeClass);
        localStorage.setItem('task', JSON.stringify(state));
    }
    
    const handleUpdate = (e) => {
        
        const id = e.target.id;
        state.task.map(task=>{
            if (id === task.id) {
                
                setValue({value: task.task, id: task.id})
            }
        })
        setForm(true)
    }
    const handleChangeUpdate = (e)=>{
        setUpdate(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(update);
        const id = e.target.id;
        console.log(id);
        const changeClass = state.task.map(task =>{
            if(id === task.id) {
                
                return {...task, task: update}
                
                
            }
            return {...task}
        })
        setForm(false)
        setState(state.task = changeClass);
        localStorage.setItem('task', JSON.stringify(state));
    }
    
  return (
    <div className="formList">
    {form?
    <form id={value.id} onSubmit={handleSubmit}>
        <input  onChange={handleChangeUpdate}  defaultValue={value.value} type="text"/>
        <input type="submit" value="Save"/>
    </form>
    :
    <div className="list">
    <label  key={task.id}  className={task.completed ? 'tach' : 'text'}>
        <input id={task.id} onChange={handleOnChange} type="checkbox" checked={task.completed}/>
        {task.task}
        </label>
        <Button id={task.id} onClick={handleDelete}>Delete</Button>
        <Button id={task.id} onClick={handleUpdate}>Update</Button>
        </div>
    }
    
    </div>
  )
}
