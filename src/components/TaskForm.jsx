import { useState, useContext } from 'react'
import {TaskContext} from '../context/TaskContext'


function TaskForm() {

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	 const {createTask} = useContext(TaskContext);
	 
	const handleSubmit = (e) => {
		e.preventDefault();
	
			createTask(title,description);

			setTitle('');
			setDescription('');
		}
	return (
<div className='max-w-md mx-auto'>
		<form onSubmit={handleSubmit} className='bg-slate-700 mb-8 p-10'>
 <h1 className='text-white text-xl' >Crea tu  Tarea</h1>

			<input className='bg-slate-300 p-3 mb-2 w-full' placeholder='Escribre tu tarea'
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>
			<br />
	<textarea className='bg-slate-300 p-3 mb-2 w-full h-28' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Escribe la Descripcion de la tarea' id="" cols="30" rows="10"></textarea>
			<button className='bg-indigo-600 text-white px-3 py-1 rounded-md' >Guardar</button>
		</form>
</div>

	)
}

export default TaskForm