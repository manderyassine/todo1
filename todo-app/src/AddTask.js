import React, { useState, useEffect } from 'react';

function AddTask({ addTask, editTask, currentTask, setCurrentTask }) {
    const [task, setTask] = useState('');

    useEffect(() => {
        if (currentTask) {
            setTask(currentTask.text);
        } else {
            setTask('');
        }
    }, [currentTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            if (currentTask) {
                editTask(currentTask.id, task);
            } else {
                addTask(task);
            }
            setTask('');
            setCurrentTask(null);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
}

export default AddTask;
