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
        if (isInputOpen && InputRef.current) {
            InputRef.current.focus()
        }
    }, [isInputOpen])

    const handleInputEnterClick = (event) => {
        if (event.key === "Enter") {
            setIsInputOpen(false)
            let InputValue = InputRef.current.value
            if (InputValue.replace(/\s+/g, '') != '' && InputValue != '') {
                console.log(InputValue)
            }
            InputRef.current.value = ''
        }
    }

    useEffect(() => {
        const handleClickOutsideInput = (event) => {
            if (InputRef.current && !InputRef.current.contains(event.target)) {
                setIsInputOpen(false)
                InputRef.current.value = ''
            }
        }

        if (isInputOpen) {
            document.addEventListener("mousedown", handleClickOutsideInput)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideInput)
        }
    })

    return (
        <button className={styles.AddTaskBtn} onClick={() => { handle_setIsInputOpen() }}>
            <span style={{ display: isInputOpen && InputRef.current.focus ? 'none' : 'flex' }} className={styles.AddTaskBtn_text}><p>Create new task</p><FaPlus /></span>

            <span style={{ display: isInputOpen && InputRef.current.focus ? 'block' : 'none' }} className={styles.AddTaskBtn_input}><input ref={InputRef} onKeyDown={handleInputEnterClick} type="text" placeholder="Eneter task name:" /></span>
        </button>
    );
}