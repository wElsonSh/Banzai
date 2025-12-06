import { AddBtn, DelBtn } from "@/shared";
import styles from "./FunctionBar.module.scss";

export function FunctionBar() {
    return (
        <div className={styles.functionBar}>
            <ul className={styles.functionBar_list}>
                <li><AddBtn /></li>
                <li><DelBtn /></li>
            </ul>
        </div>
    );
}