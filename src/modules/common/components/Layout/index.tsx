import React from 'react';
import styles from './styles.module.scss';
import Header from "../Header";
import Footer from "../Footer";
import {useDispatch, useSelector} from "react-redux";
import {selectTheme, selectThemeLogic} from "../../selectors";
import {EThemeLogic, EThemeOptions} from "../../enums";
import cn from "classnames";
import {aChangeTheme} from "../../actions";

type TLProps = {
    children: React.ReactNode
}

export default function Layout({children}: TLProps) {
    const dispatch = useDispatch();

    const activeThemeLogic = useSelector(selectThemeLogic);
    const activeTheme = useSelector(selectTheme);
    const isThemeLight = activeTheme === EThemeOptions.light;
    const isThemeDark = activeTheme === EThemeOptions.dark;

    if (activeThemeLogic === EThemeLogic.os) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            const newColorScheme = e.matches ? EThemeOptions.dark : EThemeOptions.light;
            dispatch(aChangeTheme(newColorScheme))
        });
    }

    return (
        <>
            <Header />
            <div className={cn(
                styles.layout,
                {[styles.layoutLight]: isThemeLight},
                {[styles.layoutDark]: isThemeDark},
            )}>
                {children}
            </div>
            <Footer />
        </>
    );
}
