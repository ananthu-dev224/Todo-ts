

interface CompletedProps {
    completedTask: string[];
  }

export const Completed : React.FC<CompletedProps> = ({completedTask}) => {
    return (
        <>
            <div className="text-center mt-4 ">
                <h1 className="text-3xl text-sky-800 font-bold mt-4">Finished Tasks 📋</h1>
            </div>
            {completedTask.length > 0 ? ( completedTask.map((task,index) => (
                <div key={index} className="w-[75%] bg-slate-500 text-center ml-7 mt-9 lg:ml-[115px] rounded p-5 flex justify-between items-center">
                <span className="text-2xl font-sans">{task}</span>
            </div>
            )))
                 : <div className="w-[75%] bg-slate-500 text-center ml-7 mt-9 lg:ml-[115px] rounded p-5 flex justify-between items-center">
            <span className="text-2xl font-sans">Empty!</span>
        </div>
            }
        </>
    )
}
