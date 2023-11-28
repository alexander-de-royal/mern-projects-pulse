import React from 'react';
import styles from "./featured.module.css";
import Image from "next/image";

export const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" width={550} height={500}/>
                </div>
                <div className={styles.textContainer}>
                    <h1>Lorem ipsum dolor sit amet alim consectetur adipiscing elt</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus expedita molestiae non porro quibusdam ullam. Consequuntur minima nihil odio velit!
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}