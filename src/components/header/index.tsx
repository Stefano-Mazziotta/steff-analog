import styles from './styles.module.css';

import Link from 'next/link';
import { useId } from 'react';

export function Header(){
    return (
        <header className={styles.header}>
            <nav className={styles.navigator}>
                <Link href='/home' className={styles.title}>
                    <h1>Analog Steff</h1>
                </Link>
                <Hamburger />
                <AsideMenu />                
            </nav>
        </header>
    )
}

function Hamburger(){
    const hamburgerCheckboxId = useId();
    return(
        <>
            <input id={hamburgerCheckboxId} type='checkbox' hidden />                
            <label className={styles.hamburger} htmlFor={hamburgerCheckboxId}>
                <div className={styles.hamburgerLine}></div>
                <div className={styles.hamburgerLine}></div>                    
            </label>        
        </>
    )
}

function AsideMenu() {
    return(
        <aside className={styles.asideMenu}>
            <nav className={styles.asideMenuNavigator}>
                <ul className={styles.navigatorList}>
                    <Link className={styles.listItem} href="/home"><li>Home</li></Link>
                    <Link className={styles.listItem} href="/gallery"><li>Gallery</li></Link>
                </ul>
            </nav>
        </aside>
    )
}