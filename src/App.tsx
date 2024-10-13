import React from 'react';
import './App.css';
import {Task, Todolist} from "./Todolist";

function App() {
    const fura1='What to learn-1'
    const fura2='What to learn-2'

    const tasks1: Task[] = [
        {id: 1, title: 'HTML&CSS', isDone: true}, //0
        {id: 2, title: 'JS', isDone: true}, //1
        {id: 3, title: 'ReactJS', isDone: false}, //2
    ]

    const tasks2: Task[] = [
        {id: 1, title: 'Hello world', isDone: true},
        {id: 2, title: 'I am Happy', isDone: false},
        {id: 3, title: 'Yo', isDone: false},
    ]

    return (
        <div className="App">
            <Todolist fura={fura1} tasks={tasks1}/>
            <Todolist fura={fura2} tasks={tasks2}/>
        </div>
    );
}

export default App;
