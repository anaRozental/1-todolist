import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}

export type FilterTypes = 'All' | 'Completed' | 'Active'

function App() {
    const title1='What to learn-1'


    let [tasks, setTasks]=useState( [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ])

    const removeTask = (taskId: number) =>{
        setTasks(tasks.filter((el)=>el.id!==taskId))
    }

    return (
        <div className="App">
            <Todolist title={title1}
                      tasks={tasks}
                      removeTask={removeTask}
            />

        </div>
    );
}

export default App;
