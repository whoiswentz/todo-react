import { TaskCounter } from '../TaskCounter';
import { useSelector } from "react-redux"
import { taskSelect } from '../../store/taskSlice';

import styles from './TaskStats.module.css';

export function TaskStats() {
    const taskLists = useSelector(taskSelect);

    const taskCounter = taskLists.availableTasks.length;
    const taskDone = taskLists.completedTasks.length;

    return (
        <div className={styles.statsContainer}>
            <TaskCounter 
                labelText='Tasks created' 
                counter={taskCounter} 
                labelColor={{ color: 'var(--blue-300)' }}
            />
            <TaskCounter 
                labelText='Done' 
                counter={taskDone} 
                labelColor={{ color: 'var(--purple-100)' }} 
            />
        </div>
    )
}