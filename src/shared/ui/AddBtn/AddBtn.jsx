import { FaPlus } from "react-icons/fa";
import styles from "./AddBtn.module.scss";

export function AddBtn() {
    return (
        <button className={styles.addBtn}>
            <span><FaPlus /></span>
        </button>
    );
}