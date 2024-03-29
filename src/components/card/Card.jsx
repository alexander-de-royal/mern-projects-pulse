import React from 'react';
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

export const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" className={styles.image} width={480} height={300}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>

                <Link href="/"><h1>The effect of fatty foods in adult.</h1></Link>

                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio dolor nemo pariatur quidem rerum, voluptatem voluptatum. Delectus excepturi, libero?
                </p>

                <Link href="/" className={styles.link}>Read More</Link>

            </div>
        </div>
    )
}
