import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/task';


export const TaskContext = createContext();
export function TaskContextProvider(props) {
	const [tasks, setTasks] = useState([]);

	function createTask(task, des) {
		setTasks([...tasks, {
			title: task,
			id: tasks.length,
			description: des
		}]);
	};

	function deleteTask(taskId) {

		setTasks(tasks.filter(task => task.id != taskId));
	}

	useEffect(() => {
		setTasks(data)
	}, []);

	return (
		<TaskContext.Provider value={{
			tasks,
			deleteTask,
			createTask
		}}>
			{props.children}
		</TaskContext.Provider>
	);
}

