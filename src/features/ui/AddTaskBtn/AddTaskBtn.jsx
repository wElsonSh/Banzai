import { FaPlus } from "react-icons/fa";
import styles from "./AddTaskBtn.module.scss";

export function AddTaskBtn() {
    return (
        <button className={styles.AddTaskBtn}>
            <span><p>Create new task</p><FaPlus /></span>
        </button>
    );
}