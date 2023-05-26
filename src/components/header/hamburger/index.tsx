import { useId } from "react";
import styles from '../styles.module.css'

export function Hamburger(){
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