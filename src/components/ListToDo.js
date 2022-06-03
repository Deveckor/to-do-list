import React, {useState, useReducer} from 'react'

import InputAddTask from './InputAddTask'
import FormList from './FormList'
import '../App.css'

export default function ListToDo({task}) {
    const [visible, setVisible] = useState(false)
    
    const [state, setState] = useReducer((state) => ({...state}), task)
    
    const handleVisible = () => {
        setVisible(true)
    }


  return (
    <div>
        <div className="listToDo">

        {state.task.map((task) =>{ 
            
            return (
                <>
                {(JSON.stringify(task) !=='{}')?
                    <FormList
                    task={task}
                    state={state}
                    setState={setState}
                    />
                    : null
                }
                </>
            )
            
          })}
        </div>
        {!visible
        ?
        <div className="addTask">
        <button onClick={handleVisible}>+</button>
        <span>Add task</span>
        </div>
        :<InputAddTask
        setState={setState}
        setVisible={setVisible}
        state={state}
        />
        }
    </div>
  )
}

