import React, { useState, useEffect } from 'react';
import './TodoItem.style.scss';
import { FaRegEdit } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io'

const TodoItem = ({ todo, remove, edit }) => {

    const [color, setcolor] = useState("#f2f2f2")

    useEffect(() => {
        const colorP = (hex) => {
            const red = parseInt(hex.slice(1, 3), 16)
            const green = parseInt(hex.slice(3, 5), 16)
            const blue = parseInt(hex.slice(5, 7), 16)
            return (0.299 * red + 0.587 * green + 0.144 * blue) / 255;
        }

        setcolor((colorP(todo.color) > 0.6) ? '#101829' : '#edf2f8')

    }, []);

    return (
        <div
            className='todo-item'
            style={{
                "background": `linear-gradient(to bottom, ${todo.color + "a0"} , ${todo.color} 90%)`,
                "color": color
            }}
        >
            <div className='todo-title'>{todo.inputValue}</div>
            <div className='todo-actions'>
                <IoIosCloseCircleOutline onClick={remove} />
                <FaRegEdit onClick={edit} />
            </div>
        </div>
    );
};

export default TodoItem;
