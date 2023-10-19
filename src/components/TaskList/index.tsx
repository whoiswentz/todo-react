
import { TaskStats } from '../TaskStats';
import styles from './TaskList.module.css';

export function TaskList() {
    return (
        <div className={styles.container}>
            <TaskStats />
            <div>
                bla
            </div>
        </div>
    )
}