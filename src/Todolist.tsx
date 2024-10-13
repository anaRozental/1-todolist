import React from "react";
import {Button} from "./Button";

type Props={
    fura:string,
    tasks: Task[]
}
export type Task={
    id: number
    title: string
    isDone: boolean
}
export const Todolist=({fura,tasks}:Props)=>{
    // const fura= props.fura

    return (
        <div>
            <h3>{fura}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    !tasks.length
                    ? <div>EMPTY</div>
                    :tasks.map(task=>{
                    //debugger
                    return (
                        <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span></li>
                    )
                })
            }
                {/*<li><input type="checkbox" checked={tasks[0].isDone}/> <span>{tasks[0].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={tasks[1].isDone}/> <span>{tasks[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={tasks[2].isDone}/> <span>{tasks[2].title}</span></li>*/}

            </ul>
            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
        </div>
    )
}