import { Task }from "./Task"
import { TasksProps } from "../interfaces"



export const Tasks = ({tasks, onDelete, onToggle}:TasksProps) =>{
    return (
        <>
        {tasks.map((task)=> <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />)}
        </>
    )
}