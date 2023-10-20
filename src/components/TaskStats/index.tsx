import { TaskCounter } from '../TaskCounter';
import { useSelector } from "react-redux"
import { taskSelect } from '../../store/taskSlice';

import styles from './TaskStats.module.css';

export function TaskStats() {
    const { tasks } = useSelector(taskSelect);

    const todo = tasks.filter(t => t.completed === false).length
    const done = tasks.filter(t => t.completed === true).length

    return (
        <div className={styles.statsContainer}>
            <TaskCounter 
                labelText='Tasks created' 
                counter={`${todo}`} 
                labelColor={{ color: 'var(--blue-300)' }}
                spanStyle={{padding: '0.12rem 0.5rem', backgroundColor: 'var(--gray-400)', borderRadius: '50%'}}
            />
            <TaskCounter 
                labelText='Done' 
                counter={`${done} of ${todo + done}`}
                labelColor={{ color: 'var(--purple-100)' }}
                spanStyle={{padding: '0.12rem 0.5rem', backgroundColor: 'var(--gray-400)', borderRadius: '8px'}}
            />
        </div>
    )
}