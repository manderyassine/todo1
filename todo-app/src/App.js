import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);

    const addTask = (taskText) => {
        const newTask = { id: Date.now(), text: taskText };
        setTasks([...tasks, newTask]);
    };

    const editTask = (id, updatedText) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, text: updatedText } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
    };

    return (
        <div className="container">
            <h1>Todo App</h1>
            <AddTask 
                addTask={addTask} 
                editTask={editTask} 
                currentTask={currentTask} 
                setCurrentTask={setCurrentTask} 
            />
            <TodoList tasks={tasks} onEdit={setCurrentTask} onDelete={deleteTask} />
        </div>
    );
}

export default App;
