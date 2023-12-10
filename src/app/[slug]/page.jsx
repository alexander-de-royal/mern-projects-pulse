import React from 'react';
import styles from "./singlePage.module.css";
import {Menu} from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab animi, aspernatur commodi consequatur cumque cupiditate doloremque dolorum eaque, facilis incidunt inventore ipsa magni nihil officia pariatur provident quia quis quo quos recusandae reprehenderit saepe sapiente similique unde veritatis vero!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab animi, aspernatur commodi consequatur cumque cupiditate doloremque dolorum eaque, facilis incidunt inventore ipsa magni nihil officia pariatur provident quia quis quo quos recusandae reprehenderit saepe sapiente similique unde veritatis vero!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab animi, aspernatur commodi consequatur cumque cupiditate doloremque dolorum eaque, facilis incidunt inventore ipsa magni nihil officia pariatur provident quia quis quo quos recusandae reprehenderit saepe sapiente similique unde veritatis vero!
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SinglePage;
