import { FaTimes } from 'react-icons/fa'
import { Task as TaskU } from "../interfaces"

import './style/style.css'

type TaskProps = {
    task: TaskU
    onDelete: (id:number) =>void
    onToggle:(id:number) =>void
}

export const Task = ({ task, onDelete, onToggle }:TaskProps)=>{
    return(
        <div className={`task ${task.isRemind === true ? 'borderToggle':'task'}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text} <FaTimes className='deleteButton' onClick={()=>onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}