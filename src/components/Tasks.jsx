import { ChevronRight, Trash2 } from "lucide-react"
import { useNavigate} from "react-router";
import Button from "./Button"

function Tasks({ tasks, onTaskClick, onDeliteTaskClick }) {

  const navigate = useNavigate()
  function onSeeNavigateView(task) {  
    const query = new URLSearchParams()
    query.set("title", task.title)
    query.set("description",task.description)
    navigate(`/task?${query.toString()}`)
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow ">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2" >
          <Button onClick={() => onTaskClick(task.id)} width="w-full" isCompleted={task.isCompletend}> {task.id}-{task.title} </Button>
          <Button onClick={() => onSeeNavigateView(task)} > <ChevronRight /> </Button>
          <Button onClick={() => onDeliteTaskClick(task.id)} > <Trash2 /> </Button>
        </li>
      ))}
    </ul>
  ) 
}

export default Tasks;  