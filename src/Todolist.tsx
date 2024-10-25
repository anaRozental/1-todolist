import {FilterValuesType, TaskType} from "./App";
import {Button} from "./Button";
import {useRef, useState, KeyboardEvent, ChangeEvent} from "react";

type PropsType = {
	title: string
	tasks: TaskType[]
	removeTask: (taskId: string) => void
	changeFilter: (filter: FilterValuesType) => void
	addTask: (newTitle:string) => void
}

export const Todolist = ({title, tasks, removeTask, changeFilter, addTask}: PropsType) => {

	const[newTitle, setNewTitle] = useState('')

	/*
	const changeFilterAll = ()=>changeFilter('all')
	const changeFilterActive = ()=>changeFilter('active')
	const changeFilterCompleted = ()=>changeFilter('completed')
*/

	const changeFilterForHandler=(valueFilter:FilterValuesType) => changeFilter(valueFilter)
	const addTaskHandler =()=>{
		addTask(newTitle)
		setNewTitle('')
	}
	const onKeyDownHandler= (e:KeyboardEvent<HTMLInputElement>) =>{
			if (e.key === "Enter") {
				addTaskHandler()
				/*addTask(newTitle)
				setNewTitle('')*/
			}
	}
	const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
		setNewTitle(e.currentTarget.value)
	}
	const mapedTasks=
		tasks.map(task => {
			const removeTaskHandler=()=> removeTask(task.id)
				return (
					<li key={task.id}>
						<input type="checkbox" checked={task.isDone}/>
						<span>{task.title}</span>
						<Button title={'x'} onClick={removeTaskHandler}/>
					</li>
			)})

	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input
					value={newTitle}
					onChange={onChangeHandler}
					onKeyDown={onKeyDownHandler}
				/>
				<Button title={'+'} onClick={addTaskHandler}/>
			</div>
			{
				tasks.length === 0
					? <p>Тасок нет</p>
					: <ul>{mapedTasks}</ul>
			}
			<div>

				<button onClick={() => changeFilterForHandler('all')}>ALL</button>
				<button onClick={() => changeFilterForHandler('active')}>Active</button>
				<button onClick={() => changeFilterForHandler('completed')}>Completed</button>


				{/*<button onClick={changeFilterAll}>ALL</button>
				<button onClick={changeFilterActive}>Active</button>
				<button onClick={changeFilterCompleted}>Completed</button>*/}


				{/*<Button title={'All'} onClick={changeFilterAll}/>
				<Button title={'Active'} onClick={()=> changeFilter('active')}/>
				<Button title={'Completed'} onClick={()=> changeFilter('completed')}/>*/}
			</div>
		</div>
	)
}


//------------------------
/*
type PropsType = {
	title: string
	tasks: TaskType[]
	removeTask: (taskId: string) => void
	changeFilter: (filter: FilterValuesType) => void
	addTasks: (newTitle:string) => void
}

export const Todolist = ({title, tasks, removeTask, changeFilter, addTasks}: PropsType) => {

	const inputRef = useRef<HTMLInputElement>(null);


	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input ref={inputRef}/>
				<Button title={'+'} onClick={()=>{
					if(inputRef.current){
						addTasks(inputRef.current.value)
						inputRef.current.value = ''
					}
				}}/>
			</div>
			{
				tasks.length === 0
					? <p>Тасок нет</p>
					: <ul>
						{tasks.map(task => {
							return (
								<li key={task.id}>
									<input type="checkbox" checked={task.isDone}/>
									<span>{task.title}</span>
									<Button title={'x'} onClick={() => removeTask(task.id)}/>
								</li>
							)
						})}
					</ul>
			}
			<div>
				<Button title={'All'} onClick={()=> changeFilter('all')}/>
				<Button title={'Active'} onClick={()=> changeFilter('active')}/>
				<Button title={'Completed'} onClick={()=> changeFilter('completed')}/>
			</div>
		</div>
	)
}*/
