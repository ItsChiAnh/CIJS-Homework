import { useState } from "react";
import './TodoItem.css'

const ToDoItem = ({ todo, onToggleComplete, onEditTodo, onDeleteTodo, onSaveTodo,  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState(todo.todo);

    const handleToggleComplete = () => {
        onToggleComplete(todo.id);
    }

    const handleEditTodo = () => {
        setIsEditing(true);
    }

    const handleSaveTodo = () => {
        onEditTodo(todo.id, editedTodo);
        setIsEditing(false);
    }

    const handleCancelEdit = () => {
        setEditedTodo(todo.todo);
        setIsEditing(false);
    }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsEditing(true)
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={handleToggleComplete}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={editedTodo}
                    onChange={(e) => setEditedTodo(e.target.value)}
                    onBlur={handleSaveTodo}
                />
                ) : (
                    todo.todo
                )}
            <button className="more-options" onClick={() => toggleDropdown()}>X</button>
            {isDropdownOpen && (
                <div className="dropdown-menu">
                    <input
                        type={"text"}
                        value={editedTodo}
                        onChange={(e) => setEditedTodo(e.target.value)}
                    />
                    <button onClick={handleSaveTodo}>Save</button>
                    <button onClick={() => {
                        setEditedTodo(todo.todo);
                        setIsEditing(false);
                        setIsDropdownOpen(false);
                    }
                    }>Cancel</button>
                    <button onClick={(e) => onDeleteTodo(todo.id)}>Delete</button>

                </div>
                )}
        </div>
    )
}

export default ToDoItem;
