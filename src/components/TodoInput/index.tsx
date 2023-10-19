import { useDispatch } from "react-redux"
import { addTask } from '../../store/taskSlice'
import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, useState } from "react";

import styles from './TodoInput.module.css';

export function TodoInput() {
    const [taskInput, setTaskInput] = useState('');
    const dispath = useDispatch();

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setTaskInput(event.target.value)
    }

    function handleCreateClick() {
        dispath(addTask(taskInput))
        setTaskInput('')
    }

    return (
        <div className={styles.todoInput}>
          <input type="text" placeholder='Add New Task' value={taskInput} onChange={handleInputChange} />
          <button type='submit' onClick={handleCreateClick}>
            Create
            <span><PlusCircle size={20}/></span>
          </button>
        </div>
    )
}