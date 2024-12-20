import React from 'react';
import Todo from './Todo';

function TodoList({ tasks, onEdit, onDelete }) {
    return (
        <ul>
            {tasks.map((task) => (
                <Todo key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </ul>
    );
}

export default TodoList;
