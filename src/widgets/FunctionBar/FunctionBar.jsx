import { AddBtn, DelBtn } from "@/shared";
import styles from "./FunctionBar.module.scss";

export function FunctionBar() {
    return (
        <div className={styles.functionBar}>
            <ul className={styles.functionBar_list}>
                <li title="Add new board"><AddBtn /></li>
                <li title="Delet this board"><DelBtn /></li>
            </ul>
        </div>
    );
}   