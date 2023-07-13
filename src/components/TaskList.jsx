import { useContext } from "react"
import {TaskContext} from "../context/TaskContext"
import TaskCard from "./TaskCard"


function TaskList() {
	const {tasks} = useContext(TaskContext);
	
if (tasks.length ===0 ) {
	return <h1 className="text-white font-bold text-center text-3xl">no hay tareas aun </h1>
}
	return (
		<div className="grid  grid-cols-3 gap-2 " >
			{tasks.map((task, i) => (
				<TaskCard key={i} task={task} />
			))}
		</div>
	)
}

export default TaskList;