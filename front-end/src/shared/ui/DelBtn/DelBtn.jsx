import { FaTrash } from "react-icons/fa";
import styles from "./DelBtn.module.scss";

export function DelBtn() {
    return (
        <button className={styles.delBtn}>
            <span><FaTrash /></span>
        </button>
    );
}