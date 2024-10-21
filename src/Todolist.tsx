import React, { useState } from "react";
import {Button} from "./Button";
import { TaskType, FilterTypes } from "./App";

type PropsType = {
    title: string,
    tasks: TaskType[]
    removeTask: (taskId: number) => void
}

export const Todolist = ({title, tasks, removeTask}: PropsType) => {


    const [valueForFilter, setValueForFilter] = useState('All')

    const filterTasks = (filterValue: FilterTypes) => {
        setValueForFilter(filterValue)
    }


    const filteredTasks = () => {
        let durshlag = tasks
        //switch
        if (valueForFilter === 'Active') durshlag = tasks.filter((el) => !el.isDone)
        if (valueForFilter === 'Completed') durshlag = tasks.filter((el) => el.isDone)
        return durshlag
    }

    const pastaCompleted = filteredTasks()

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'+'}/>
            </div>
            {
                pastaCompleted.length === 0
                    ? <p>EMPTY</p>
                    : <ul>
                        {pastaCompleted.map(task => {
                            //debugger
                            return (
                                <li key={task.id}>
                                    <button onClick={() => removeTask(task.id)}>x</button>
                                    <input type="checkbox" checked={task.isDone}/>
                                    <span>{task.title}</span>
                                </li>
                            )
                        })}
                    </ul>
                }
                    <div>
                        <button onClick={()=>filterTasks('All')}>All</button>
                        <button onClick={() => filterTasks('Active')}>Active</button>
                        <button onClick={() => filterTasks('Completed')}>Completed</button>
                    </div>
            </div>
    )}
