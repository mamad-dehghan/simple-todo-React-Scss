import React from 'react';
import './TodoInput.style.scss'

const TodoInput = ({ inputValue, setInputValue, editTodo, editTodoId, addTodo }) => {
    return (
        <div className='input-section'>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={e => (e.key === "Enter") && (editTodoId === null ? addTodo() : editTodo())} placeholder='Add a todo' />

            {editTodoId === null ? <button onClick={addTodo}>Add</button> : <button onClick={editTodo}>edit</button>}
        </div>
    );
};

export default TodoInput;
