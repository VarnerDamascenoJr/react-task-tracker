import { useState, useEffect } from 'react';
import './App.css';
import { AddTasks } from './components/AddTasks';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { InputsSubmitProps, Task } from './interfaces';

function App() {

  const [show, setShow] = useState<Boolean>(false)
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(()=>{
    const getTasks = async()=>{
      const getTasksFromServer = await fetchingTasks()
      setTasks(getTasksFromServer)
    }
    getTasks()
  },[])

  const fetchingTasks = async()=>{
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

  const fetchingTask = async(id:number)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();
    return data
  }

  const showForm = () =>{
    setShow(!show)
  }

  const addTask = async(data:InputsSubmitProps) =>{
    const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const newTask = await res.json()

    setTasks([...tasks, newTask])
  }

  const deleteTask = async (id: number) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })

    res.status === 200
    ?setTasks(
      tasks.filter((task)=> task.id !== id)
    ):alert('Error')

  }

  const toggleTask = async(id: number) =>{
    const taskTobeUpDated = await fetchingTask(id)

    const upDatedTask = {...taskTobeUpDated, isRemind: !taskTobeUpDated.isRemind}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(upDatedTask)
    })

    const data = await res.json()
    
    setTasks(
      tasks.map((task)=> task.id === id ? {...task, isRemind : data.isRemind}:task)
    )
  }

  return (
    <div className="App">
      <Header show={show} onShow={showForm}/>
      {show && <AddTasks  onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}/> :'No tasks here'} 
    </div>
  );
}

export default App;