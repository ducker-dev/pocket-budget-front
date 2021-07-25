import React from 'react';
import {Link} from "react-router-dom";
import cn from "classnames";
import styles from './styles.module.scss';
import {APP_ROUTES} from "../../../../app/constants/routes";
import {useDispatch, useSelector} from "react-redux";
import {selectTheme} from "../../selectors";
import {EThemeOptions} from "../../enums";
import {aChangeTheme} from "../../actions";

export default function Header() {
    const dispatch = useDispatch();

    const activeTheme = useSelector(selectTheme);
    const isThemeLight = activeTheme === EThemeOptions.light;
    const isThemeBlack = activeTheme === EThemeOptions.black;

    const changeTheme = () => {
        if (activeTheme === EThemeOptions.light) {
            dispatch(aChangeTheme(EThemeOptions.black))
        } else {
            dispatch(aChangeTheme(EThemeOptions.light))
        }
    }

    return (
        <header className={cn(
            styles.header,
            {[styles.headerLight]: isThemeLight},
            {[styles.headerBlack]: isThemeBlack},
        )}>
            <div className="container">
                <div className={styles.headerContent}>
                    <div>
                        <Link className={styles.headerLogo} to={APP_ROUTES.COMMON.START}>Main</Link>
                        <Link to={APP_ROUTES.USER.PROFILE}>User</Link>
                    </div>
                    <button onClick={changeTheme}>Change theme to {isThemeLight ? "dark" : "light"}</button>
                </div>
            </div>
        </header>
    );
}
