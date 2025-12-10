import styles from "./TaskList.module.scss";

export function TaskList() {
    return (
        <div className={styles.TaskList_container}>
            <ul className={styles.TaskList}>
                <li>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis pariatur earum repellendus similique consequuntur praesentium voluptates obcaecati ducimus. Quos suscipit in labore animi, voluptates possimus quibusdam ducimus distinctio consequatur. Modi.</p>
                </li>
                <li>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas eligendi laborum vero ipsa temporibus mollitia delectus officiis vitae. Magni, saepe iusto suscipit assumenda tempora itaque dolor ex maiores id excepturi dolore maxime ea officiis veniam impedit facilis corrupti cum hic minima alias nulla reprehenderit expedita voluptate. Excepturi, iure veniam!</p>
                </li>
                <li>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis pariatur earum repellendus similique consequuntur praesentium voluptates obcaecati ducimus. Quos suscipit in labore animi, voluptates possimus quibusdam ducimus distinctio consequatur. Modi.</p>
                </li>
                <li>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis pariatur earum repellendus similique consequuntur praesentium voluptates obcaecati ducimus. Quos suscipit in labore animi, voluptates possimus quibusdam ducimus distinctio consequatur. Modi.</p>
                </li>
                <li>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis pariatur earum repellendus similique consequuntur praesentium voluptates obcaecati ducimus. Quos suscipit in labore animi, voluptates possimus quibusdam ducimus distinctio consequatur. Modi.</p>
                </li>
            </ul>
        </div>
    );
}