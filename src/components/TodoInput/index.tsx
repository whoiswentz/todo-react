import { PlusCircle } from '@phosphor-icons/react'

import styles from './TodoInput.module.css';

export function TodoInput() {
    return (
        <div className={styles.todoInput}>
          <input type="text" placeholder='Add New Task' />
          <button type='submit'>
            Create
            <span><PlusCircle size={20}/></span>
          </button>
        </div>
    )
}