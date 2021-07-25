import React from 'react';
import styles from './styles.module.scss';
import Header from "../Header";
import Footer from "../Footer";
import {useSelector} from "react-redux";
import {selectTheme} from "../../selectors";
import {EThemeOptions} from "../../enums";
import cn from "classnames";

type TLProps = {
    children: React.ReactNode
}

export default function Layout({children}: TLProps) {
    const activeTheme = useSelector(selectTheme);
    const isThemeLight = activeTheme === EThemeOptions.light;
    const isThemeBlack = activeTheme === EThemeOptions.black;

    return (
        <>
            <Header />
            <div className={cn(
                styles.layout,
                {[styles.layoutLight]: isThemeLight},
                {[styles.layoutBlack]: isThemeBlack},
            )}>
                {children}
            </div>
            <Footer />
        </>
    );
}
