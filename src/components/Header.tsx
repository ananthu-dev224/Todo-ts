
import { Link } from "react-router-dom"

export const Header = () => {
  console.log("Header");
  
  return (
    <div className="text-center  bg-slate-400 p-5 text-xl">
        <Link to='/'>Todo</Link>&nbsp;&nbsp;&nbsp;
        <Link to='/todo-completed'>Completed</Link>
    </div>
  )
}
