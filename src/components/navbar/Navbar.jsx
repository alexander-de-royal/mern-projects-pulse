import React from 'react';
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import {ThemeToggle} from "@/components/themeToggle/ThemeToggle";
import {AuthLinks} from "@/components/authLinks/AuthLinks";

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <ThemeToggle/>
                {/*<Link href="/" className={styles.link}>Homepage</Link>*/}
                {/*<Link href="/" className={styles.link}>Contact</Link>*/}
                {/*<Link href="/" className={styles.link}>About</Link>*/}
            </div>

            <div className={styles.logo}>
                <Image src="/Pulse Logo.png" alt="pulse-logo" width={150} height={40}/>
            </div>

            <div className={styles.links}>
                {/*<Image src="/facebook.png" alt="facebook" width={24} height={24}/>*/}
                {/*<Image src="/instagram.png" alt="facebook" width={24} height={24}/>*/}
                {/*<Image src="/tiktok.png" alt="facebook" width={24} height={24}/>*/}
                {/*<Image src="/youtube.png" alt="facebook" width={24} height={24}/>*/}
                {/*<Link href="/" className={styles.link}>Homepage</Link>*/}
                <Link href="/" className={styles.link}>Contact</Link>
                <Link href="/" className={styles.link}>About</Link>
                <AuthLinks/>
            </div>
        </div>
    )
}

