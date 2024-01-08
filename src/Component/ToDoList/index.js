import {useState} from "react";
import ToDoItem from "../ToDoItem";
import TODOS from "../../Data";
import {v4 as uuidv4} from "uuid";
import './ToDoList.css';

const ToDoList = () => {
    const [todos, setTodos] = useState(TODOS);

    const handleToggleComplete = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo
            )
        )
    };

    const handleEditTodo = (id, newTodo) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? {...todo, todo: newTodo} : todo
            )
        )
    };

    const handleDeleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    // add new task
    const [isAddTodoDropdownOpen, setIsAddTodoDropdownOpen] = useState(false);
    const [newTodo, setNewTodo] = useState("");
    const handleAddTodo = () => {
        setTodos((prevTodos) => [...prevTodos, {id: uuidv4(), todo: newTodo, isComplete: false}
        ]);
        setNewTodo(""); // clear input field after adding task
        setIsAddTodoDropdownOpen(false);
    };

    return (
        <div className='todo-list'>
            <ul>
                {todos.map((todo) => (
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        onToggleComplete={handleToggleComplete}
                        onEditTodo={handleEditTodo}
                        onDeleteTodo={handleDeleteTodo}
                    />
                ))}
            </ul>
            <button onClick={() => setIsAddTodoDropdownOpen(true)}>Add new task</button>
            {isAddTodoDropdownOpen && (
                <div className='add-todo-dropdown'>
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        autoFocus
                    />
                    <button onClick={handleAddTodo}>Save</button>
                    <button onClick={() => setIsAddTodoDropdownOpen(false)}>Cancel</button>
                </div>
                )}
        </div>

    )
}

export default ToDoList;