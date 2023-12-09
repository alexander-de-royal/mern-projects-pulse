import React from 'react';
import styles from "./blogPage.module.css";
import {CardList} from "@/components/cardList/CardList";
import {Menu} from "@/components/Menu/Menu";
import {Card} from "@/components/card/Card";
import {CategoryList} from "@/components/categoryList/CategoryList";

const BlogPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Style Blog</h1>
            <div className={styles.content}></div>
            <div>
                <CategoryList/>
                <CardList/>
                <Card/>
                {/*<Menu/>*/}
            </div>
        </div>
    )
}

export default BlogPage;