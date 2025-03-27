import { useEffect, useState } from "react"
import AddTasks from "../components/AddTasks"
import Tasks from "../components/Tasks"
import Title from "../components/Title"

export default function App() {
  
  const [tasks, setTesks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  )

  useEffect(() => {
    async function fecthTasks() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=30",{
        method: 'GET'
      })
      const date = await response.json()
      setTesks(date)
    }
    //Se queser chame a API descomente
    //fecthTasks()
  },[])
  function onTaskClick(taskId) {
    const newTask = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompletend: !task.isCompletend }
      }
      return task
    })
    setTesks(newTask)
  }

  function onDeliteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTesks(newTasks)
  }

  function onAddTaskSubmit(title, description) {    
    if(title.trim().length > 2){
      const newTask = {
        id: tasks.length !== 0 ? tasks[tasks.length-1].id+1 : 0,
        title,
        description,
        isCompletend: false
      }
      setTesks([...tasks, newTask])
    } else {
      return alert("Minimo 3 caracteres")
    }
  }

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="flex w-screen h-screen bg-slate-500 justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title> Gerenciador de tarefas </Title>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeliteTaskClick={onDeliteTaskClick} />
      </div>
      {tasks.forEach((task) => task.id)}
    </div>
  )
}


