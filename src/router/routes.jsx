import { createBrowserRouter } from "react-router";
import App from "../views/App" 
import Task from "../views/TaskPage" 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/task",
    element: <Task />
  }
]);