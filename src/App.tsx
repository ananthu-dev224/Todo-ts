import { Todo } from "./components/Todo"
import { Completed } from "./components/Completed"
import { Header } from "./components/Header"
import { useState } from "react"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  console.log("App");
  const [completedTask,setCompletedTask] = useState<string[]>([])
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/"  element={<Todo setCompletedTask={setCompletedTask} completedTask={completedTask} />} />
          <Route path="/todo-completed" element={<Completed  completedTask={completedTask} />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
