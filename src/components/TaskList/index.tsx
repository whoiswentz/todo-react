
import { TaskStats } from '../TaskStats';
import {useSelector} from 'react-redux'
import {ClipboardText} from "@phosphor-icons/react"
import styles from './TaskList.module.css';
import { taskSelect } from '../../store/taskSlice';
import { Task } from '../Task';

export function TaskList() {
    const {tasks, total} = useSelector(taskSelect);
    
    const isTasksEmpty = total === 0;

    return (
        <div className={styles.container}>
            <TaskStats />
            <div className={styles.taskList}>
                {isTasksEmpty ? (
                    <div className={styles.noTaskPlaceHolder}>
                        <ClipboardText size={56}/>
                        <div className={styles.textContainer}>
                            <h4>Você ainda não tem tarefas cadastradas</h4>
                            <h4>Crie tarefas e organize seus itens a fazer</h4>
                        </div>
                    </div>
                ) : (<>
                    <div className={styles.taskContainer}>
                        {tasks.map(t => {
                            return <Task key={t.id} id={t.id} description={t.description} completed={t.completed} />
                        })}
                    </div>
                </>)}             
            </div>
        </div>
    )
}