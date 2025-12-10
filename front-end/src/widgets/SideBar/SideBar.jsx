import { FunctionBar, NavBar } from "..";
import styles from "./SideBar.module.scss";

export function SideBar() {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sideBar_container}>
                <FunctionBar />
                <NavBar />
            </div>
        </div>
    );
}