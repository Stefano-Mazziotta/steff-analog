import styles from './styles.module.css';

import Link from 'next/link';
import { useId } from 'react';

export function Header(){
    const cartCheckboxId = useId();

    return (
        <header className={styles.header}>
            <nav className={styles.navigator}>
                <Link href='/home' className={styles.title}>
                    <h1>STEFANO MAZZIOTTA</h1>
                </Link>
                <input id={cartCheckboxId} type='checkbox' hidden />                
                <label className={styles.hamburger} htmlFor={cartCheckboxId}>
                    <div className={styles.hamburgerLine}></div>
                    <div className={styles.hamburgerLine}></div>                    
                </label>
                <aside className={styles.asideMenu}>
                    <p>aside bar</p>
                </aside>
            </nav>
        </header>
    )
}