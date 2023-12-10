import React from 'react';
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {

    const status = "authenticated";

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder="write a comment..." className={styles.input}>
                        <button className={styles.button}>Send</button>
                    </textarea>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" width={50} height={50} alt="user image" className={styles.image}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.203</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa dolore ducimus est impedit, ipsam libero maiores natus numquam qui, quo recusandae rem sed soluta ullam vel voluptatem. Accusantium animi eius fuga modi necessitatibus suscipit unde voluptas. Atque cum, ea eos, explicabo illo ipsum labore nam, quibusdam reiciendis tempore ut?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comments;
