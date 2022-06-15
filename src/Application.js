import React, {useEffect, useState} from "react";
import List from "./List";
import Form from "./Form";


const Application = () => {
    const initialState = JSON.parse(localStorage.tasks || '[]') ;
    console.log(initialState)

    const [tasks, setTasks] = useState(initialState);
    useEffect(()=> {
        localStorage.tasks = JSON.stringify(tasks);
    }, [tasks]);


    const addTask = (name, description, isCompleted) => {
        setTasks((prev) => {
            return [...prev, {name, description, isCompleted}];
        });
    };
    
    const deleteTask = (index) => {
        setTasks((prevTasks) => {
            return prevTasks.filter((task) => task.index !== index)
        })
    }

    return (
        <div>
            <Form addTask={addTask}/>
            <List tasks={tasks} deleteTask={deleteTask}/>
        </div>
    )
};

export default Application;
