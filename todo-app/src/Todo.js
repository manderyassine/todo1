import React from 'react';

function Todo({ task, onEdit, onDelete }) {
    return (
        <li>
            {task.text}
            <div className="task-actions">
                <button className="edit-button" onClick={() => onEdit(task.id)}>Edit</button>
                <button className="delete-button" onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </li>
    );
}

export default Todo;
