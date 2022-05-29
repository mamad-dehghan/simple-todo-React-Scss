import React, { useState } from 'react';
import { v4 } from 'uuid';
// import TodoInput from '../TodoInput';
import TodoItem from './../TodoItem';
import './TodoManager.style.scss';

const TodoManager = () => {
	const [todoList, setTodoList] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [editTodoId, setEditTodoId] = useState(null);


	const generateColor = () => {
		return `#${Math.floor(Math.pow(16, 6) * Math.random()).toString(16).padStart(6, '0')}`
	}

	const addTodo = () => {
		if (inputValue === '')
			return
		setTodoList([...todoList, { inputValue, id: v4(), color: generateColor() }]);
		setInputValue('');
	}

	const removeTodo = (id) => {
		setTodoList(todoList.filter(item => item.id !== id))

	}

	const editTodo = () => {
		if (inputValue === '')
			return;
		setTodoList(todoList.map(item => {
			if (item.id === editTodoId) {
				return (
					{ ...item, inputValue }
				)
			} else {
				return item;
			}
		}))
		setInputValue('')
		setEditTodoId(null)
	}

	const loadEditTodoInput = (id) => {
		setEditTodoId(id)
		const title = todoList.find(item => item.id === id)?.inputValue
		console.log(title)
		setInputValue(title)
	}

	return (
		<div className="todo-manager">
			<h2>Feelin' productive today?</h2>
			<div className='input-section'>
				{/* <TodoInput inputValue={inputValue} setInputValue={setInputValue} addTodo={addTodo} editTodo={editTodo} /> */}

				<input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={e => (e.key === "Enter") && (editTodoId === null ? addTodo(): editTodo())} placeholder='Add a todo' />

				{editTodoId === null ? <button onClick={addTodo}>Add</button> : <button onClick={editTodo}>edit</button>}
			</div>
			<div className='todos-section'>
				{todoList.map(item => (
					<TodoItem key={item.id} todo={item} remove={() => removeTodo(item.id)} edit={() => loadEditTodoInput(item.id)}></TodoItem>
				))}
			</div>

		</div>

	);
};

export default TodoManager;