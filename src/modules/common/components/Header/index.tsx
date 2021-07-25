import React from 'react';
import {Link} from "react-router-dom";
import cn from "classnames";
import styles from './styles.module.scss';
import {APP_ROUTES} from "../../../../app/constants/routes";
import {useDispatch, useSelector} from "react-redux";
import {selectTheme, selectThemeLogic} from "../../selectors";
import {EThemeLogic, EThemeOptions} from "../../enums";
import {aChangeTheme, aChangeThemeLogic} from "../../actions";

export default function Header() {
    const dispatch = useDispatch();

    const activeTheme = useSelector(selectTheme);
    const activeThemeLogic = useSelector(selectThemeLogic);

    const selectValue = activeThemeLogic === EThemeLogic.os ? EThemeLogic.os : activeTheme;
    const isThemeLight = activeTheme === EThemeOptions.light;
    const isThemeDark = activeTheme === EThemeOptions.dark;

    const changeTheme = (event: any) => {
        const optionV = event.target.value;

        if (optionV === EThemeLogic.os) {
            dispatch(aChangeThemeLogic(EThemeLogic.os))
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                dispatch(aChangeTheme(EThemeOptions.dark))
            } else {
                dispatch(aChangeTheme(EThemeOptions.light))
            }
        } else {
            dispatch(aChangeThemeLogic(EThemeLogic.user))
            dispatch(aChangeTheme(optionV))
        }
    }

    return (
        <header className={cn(
            styles.header,
            {[styles.headerLight]: isThemeLight},
            {[styles.headerDark]: isThemeDark},
        )}>
            <div className="container">
                <div className={styles.headerContent}>
                    <div>
                        <Link className={styles.headerLogo} to={APP_ROUTES.COMMON.START}>Main</Link>
                        <Link to={APP_ROUTES.USER.PROFILE}>Profile</Link>
                    </div>
                    <div className={styles.headerSelectWrapper}>
                        <select name="theme-select" value={selectValue} onChange={changeTheme} className={styles.headerSelect}>
                            <option value={EThemeOptions.light}>Light Theme</option>
                            <option value={EThemeOptions.dark}>Dark Theme</option>
                            <option value={EThemeLogic.os}>Dynamic (same as OS)</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
}
