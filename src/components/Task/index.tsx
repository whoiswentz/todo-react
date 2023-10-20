import styles from "./Task.module.css";
import {Trash, Check} from '@phosphor-icons/react'
import { useDispatch } from "react-redux"
import {completeTask, deleteTask} from '../../store/taskSlice'

type TaskProps = {
    id: string
    description: string
    completed: boolean
}

export function Task({ id, description, completed }: TaskProps) {
    const dispatch = useDispatch()

    function handleCompleteTask(taskId: string) {
        dispatch(completeTask(taskId))
    }

    function handleDeleteTask(taskId: string) {
        dispatch(deleteTask(taskId))
    }

    return (
        <div className={styles.task}>
            <button 
                className={!completed ? styles.circleWithoutBackground : styles.circleWithCheck}
                onClick={() => handleCompleteTask(id)}
            >
                <Check size={16} />
            </button>
            <p className={!completed ? styles.textTaskIncomplete : styles.textTaskComplete}>{description}</p>
            <button className={styles.trashButton} onClick={() => handleDeleteTask(id)}>
                <Trash size={30}/>
            </button>
        </div>
    )
}