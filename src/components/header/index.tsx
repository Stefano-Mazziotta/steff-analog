import styles from './styles.module.css';

import Link from 'next/link';
import { useId } from 'react';

interface ILink {
    id: string
    href: string
    description: string
}

const links:ILink[] = [
    {
        id: '1',
        href: '/home',
        description: 'Home'
    },
    {
        id: '2',
        href: '/gallery',
        description: 'Gallery'
    }
]

export function Header(){
    
    return (
        <header className={styles.header}>
            <nav className={styles.navigator}>
                <Link href='/home' className={styles.title}>
                    <h1>Analog Steff</h1>
                </Link>
                <Hamburger />
                <AsideMenu />       
                <ul className={styles.navigatorList}>
                    {
                        links.map(link => {
                            return(
                                <li key={link.id} className={styles.listItem}>
                                    <Link href={link.href}>
                                        {link.description}
                                    </Link>                                    
                                </li>
                            )
                        })
                    }
                </ul>         
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
                <ul className={`${styles.aside} ${styles.navigatorList}`}>
                    {
                        links.map(link => {
                            return(
                                <li key={link.id} className={styles.listItem}>
                                    <Link href={link.href}>
                                        {link.description}
                                    </Link>                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </aside>
    )
}