import { ChevronLeft } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router"
import Title from "../components/Title"

export default function TaskPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const title = searchParams.get("title")
  const description = searchParams.get("description")
  return (
    <div className="w-screen h-screen bg-slate-500 justify-center p-6">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button 
          onClick={() => navigate(-1)} 
          className="absolute left-0 top-0 bottom-0 text-slate-100">
            <ChevronLeft />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
      </div>
      <div className="bg-slate-200 p-4 rounded-md">
        <h2 className="text-xl font-bold text-slate-600">{title}</h2>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  )
}