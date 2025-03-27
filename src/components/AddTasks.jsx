import { useState } from "react"
import Input from "./Input"

function AddTasks({ onAddTaskSubmit }) {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow my-4">
      <div className="flex gap-2 flex-col">
        <Input type="text" value={title} onChange={(event) => { setTitle(event.target.value) }} placeholder="Digite o título da tarefa." />
        <Input type="text" value={description} onChange={(event) => { setDescription(event.target.value) }} placeholder="Digite a descrição da tarefa." />
        <button
          type="button"
          className="bg-slate-500 text-white p-2 rounded-md font-medium"
          onClick={() => {
            if (!title || !description) {
              return alert("Preencha o títilo e a descrição da tarefa.")
            } else {
              onAddTaskSubmit(title, description)
              setTitle("")
              setDescription("")
            }
          }}>
          Adicionar
        </button>
      </div>
    </div>
  )
}

export default AddTasks