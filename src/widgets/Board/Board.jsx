import { Column } from "@/shared";
import styles from "./Board.module.scss";

export function Board() {
    return (
        <section className={styles.Board}>
            <div className={styles.Board_columnsContainer}>
                <ul className={styles.Board_columnsList}>
                    <li><Column /></li>
                    <li><Column /></li>
                    <li><Column /></li>
                </ul>
            </div>
        </section>
    );
}