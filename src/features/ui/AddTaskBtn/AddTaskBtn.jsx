import { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./AddTaskBtn.module.scss";

export function AddTaskBtn() {

    const [isInputOpen, setIsInputOpen] = useState(false)
    const InputRef = useRef(null)
    const handle_setIsInputOpen = () => {
        setIsInputOpen(!isInputOpen)
    }


    useEffect(() => {
        if (isInputOpen) {
            InputRef.current.focus()
        }
    }, [isInputOpen])

    return (
        <button className={styles.AddTaskBtn} onClick={() => { handle_setIsInputOpen() }}>
            <span style={{ display: isInputOpen ? 'none' : 'flex' }} className={styles.AddTaskBtn_text}><p>Create new task</p><FaPlus /></span>

            <span style={{ display: isInputOpen ? 'block' : 'none' }} className={styles.AddTaskBtn_input}><input ref={InputRef} type="text" placeholder="Eneter task name:" /></span>
        </button>
    );
}