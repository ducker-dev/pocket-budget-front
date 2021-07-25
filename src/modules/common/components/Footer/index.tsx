import React from 'react';
import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {selectTheme} from "../../selectors";
import {EThemeOptions} from "../../enums";
import cn from "classnames";

export default function Footer() {
    const activeTheme = useSelector(selectTheme);
    const isThemeLight = activeTheme === EThemeOptions.light;
    const isThemeBlack = activeTheme === EThemeOptions.black;

    return (
        <footer className={cn(
            styles.footer,
            {[styles.footerLight]: isThemeLight},
            {[styles.footerBlack]: isThemeBlack},
        )}>
            <div className="container">
               <div className={styles.footerContent}>
                   <div>2021 © ducker_dev</div>
               </div>
            </div>
        </footer>
    );
}
