import React from 'react';
import styles from "./cardList.module.css";
import {Pagination} from "@/components/pagination/Pagination";
import {Card} from "@/components/card/Card";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
import Link from "next/link";
import Image from "next/image";

export const CardList = () => {
    return (
        <div className={styles.container}>

            <div className={styles.containerOne}>
                <h1 className={styles.title}>Recent Posts</h1>
                    <div className={styles.posts}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Pagination/>
                    </div>
            </div>

            <div className={styles.containerTwo}>
                <div className={styles.containerThree}>
                    <h2 className={styles.subtitle}>{"What's hot"}</h2>
                    <h1 className={styles.titleTwo}>Most Popular</h1>
                        <div className={styles.items}>

                    <Link href="/" className={styles.item}>
                        {/*<div className={styles.imageContainer}>*/}
                        {/*    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>*/}
                        {/*</div>*/}
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                            <h3 className={styles.postTitle}>
                                Nimendis placeat porro quasi ratione reiciendis, sint vel vero? Vero.
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.username}>John Doe</span>
                                <span className={styles.date}>10.03.2022</span>
                            </div>
                        </div>
                    </Link>

                    <Link href="/" className={styles.item}>
                        {/*<div className={styles.imageContainer}>*/}
                        {/*    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>*/}
                        {/*</div>*/}
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                            <h3 className={styles.postTitle}>
                                Nimendis placeat porro quasi ratione reiciendis, sint vel vero? Vero.
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.username}>John Doe</span>
                                <span className={styles.date}>10.03.2022</span>
                            </div>
                        </div>
                    </Link>

                    <Link href="/" className={styles.item}>
                        {/*<div className={styles.imageContainer}>*/}
                        {/*    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>*/}
                        {/*</div>*/}
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.food}`}>Food</span>
                            <h3 className={styles.postTitle}>
                                Nimendis placeat porro quasi ratione reiciendis, sint vel vero? Vero.
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.username}>John Doe</span>
                                <span className={styles.date}>10.03.2022</span>
                            </div>
                        </div>
                    </Link>

                    <Link href="/" className={styles.item}>
                        {/*<div className={styles.imageContainer}>*/}
                        {/*    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>*/}
                        {/*</div>*/}
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                            <h3 className={styles.postTitle}>
                                Nimendis placeat porro quasi ratione reiciendis, sint vel vero? Vero.
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.username}>John Doe</span>
                                <span className={styles.date}>10.03.2022</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <h2 className={styles.subtitle}>{"Chosen by editor"}</h2>
                <h1 className={styles.titleTwo}>{"Editor's Pic"}</h1>
                <div className={styles.items}>
                    <Link href="/" className={styles.item}>
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                        </div>
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                            <h3 className={styles.postTitle}>
                                Nimendis placeat porro quasi ratione reiciendis, sint vel vero? Vero.
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.username}>John Doe</span>
                                <span className={styles.date}>10.03.2022</span>
                            </div>
                        </div>
                    </Link>

                    <Link href="/" className={styles.item}>
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                        </div>
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                            <h3 className={styles.postTitle}>
                                Nimendis placeat porro quasi ratione reiciendis, sint vel vero? Vero.
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.username}>John Doe</span>
                                <span className={styles.date}>10.03.2022</span>
                            </div>
                        </div>
                    </Link>

                    <Link href="/" className={styles.item}>
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                        </div>
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.food}`}>Food</span>
                            <h3 className={styles.postTitle}>
                                Nimendis placeat porro quasi ratione reiciendis, sint vel vero? Vero.
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.username}>John Doe</span>
                                <span className={styles.date}>10.03.2022</span>
                            </div>
                        </div>
                    </Link>

                    <Link href="/" className={styles.item}>
                        <div className={styles.imageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                        </div>
                        <div className={styles.textContainer}>
                            <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                            <h3 className={styles.postTitle}>
                                Nimendis placeat porro quasi ratione reiciendis, sint vel vero? Vero.
                            </h3>
                            <div className={styles.detail}>
                                <span className={styles.username}>John Doe</span>
                                <span className={styles.date}>10.03.2022</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

        </div>
    )
}
