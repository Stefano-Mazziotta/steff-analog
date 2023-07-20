import Link from 'next/link';
import styles from './styles.module.css';

import { Hamburger } from './hamburger';
import { AsideMenu } from './asideMenu';
import { LinksList } from '../linksList';

export function Header(){
    
    return (
        <header className={styles.header}>
            <nav className={styles.navigator}>
                <Link href='/home' className={styles.title}>
                    <h1>Analog Steff</h1>
                </Link>
                <Hamburger />
                <AsideMenu />       
                <LinksList 
                    navigatorContainerClass={styles.navigatorList}
                    linkClass={styles.listItem}
                />       
            </nav>
        </header>
    )
}

