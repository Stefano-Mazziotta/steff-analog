import styles from '../styles.module.css'
import { LinksList } from "../../linksList"

export function AsideMenu() {
    return(
        <aside className={styles.asideMenu}>
            <nav className={styles.asideMenuNavigator}>
                <LinksList 
                    navigatorContainerClass={`${styles.aside} ${styles.navigatorList}`} 
                    linkClass={styles.listItem}
                />       
            </nav>
        </aside>
    )
}