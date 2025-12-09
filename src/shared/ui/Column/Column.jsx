import { AddTaskBtn } from '@/features';
import { TaskList } from '@/shared';
import styles from './Column.module.scss';

export function Column() {
    return (
        <div className={styles.Column}>
            <div className={styles.Column_container}>
                <span className={styles.Column_name}><h1>#1 Column Name</h1></span>
                <span className={styles.Column_AddTaskBtn_container}><AddTaskBtn /></span>
                <TaskList />
            </div>
        </div>
    );
}