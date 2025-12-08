import { AddTaskBtn } from '@/features';
import styles from './Column.module.scss';

export function Column() {
    return (
        <div className={styles.Column}>
            <div className={styles.Column_container}>
                <span className={styles.Column_name}><h1>#1 Column Name</h1></span>
                <ul className={styles.Column_tasksList}>
                    <li><AddTaskBtn /></li>
                </ul>
            </div>
        </div>
    );
}