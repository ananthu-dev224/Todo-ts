
import { useState } from "react"

interface TodoProps {
    setCompletedTask: React.Dispatch<React.SetStateAction<string[]>>;
    completedTask: string[];
  }



export const Todo : React.FC<TodoProps> = ({ setCompletedTask, completedTask }) => {
    console.log("Todo");

    const [tasks, setTasks] = useState<string[]>([])
    const [newTask, setNewTask] = useState<string>('')



    const addComplete = (index : number) => {
        const task : string[] = tasks.filter((_,i) => i === index)
        setCompletedTask([...task,...completedTask])
        setTasks(tasks.filter((_,i) => i !== index))
    } 

    const addTask = () => {
        if(newTask !== ''){
            setTasks((t) => [newTask, ...t])
            setNewTask('')
        }
    }

    const removeTask = (index : number) => {
        setTasks(tasks.filter((_,i) => i !== index))
    }


    return (
        <>
         
         
            <div className="text-center mt-4">
                <h1 className="text-3xl text-sky-800 font-bold mt-4">Todo-TS</h1>
                <input placeholder="Enter a To-Do Task ...." type="text" className="mt-4 w-[75%] px-2 py-3 text-xl/8 rounded border border-zinc-700 focus:border-blue-600" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                <button  onClick={addTask} className="relative bg-gradient-to-br from-green-700 to-green-800 p-2 ml-4 rounded text-xl text-slate-300 font-bold shadow-md overflow-hidden transition-all duration-300 hover: hover:from-green-900 hover:to-green-700">
                    Add Task
                </button>
            </div>
            {tasks.length > 0 ? (
                tasks.map((value, index) => (
                    <div key={index} className="w-[75%] bg-slate-500 text-center ml-7 mt-2 lg:ml-[115px] rounded p-5 flex justify-between items-center">
                        <span className="text-2xl font-sans">{value}</span>
                        <div className="flex items-center">
                            <button onClick={() => removeTask(index)} className="bg-gradient-to-br from-red-700 to-red-800 p-2 rounded text-xl text-slate-300 font-bold hover:from-red-900 hover:to-red-700">
                                Remove
                            </button> &nbsp; 
                            <button onClick={() => addComplete(index)} className="bg-gradient-to-br from-blue-700 to-blue-800 p-2 rounded text-xl text-slate-300 font-bold hover:from-blue-900 hover:to-blue-700">
                                Completed
                            </button>
                            
                        </div>
                    </div>
                ))) :  <div className="w-[75%] bg-slate-500 text-center ml-7 mt-9 lg:ml-[115px] rounded p-5 flex justify-center items-center">
                <span className="text-2xl font-sans">Tasks are Empty 📃</span>
            </div>
}

        </>
    )
}
