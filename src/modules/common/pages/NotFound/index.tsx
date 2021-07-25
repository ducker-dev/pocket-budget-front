import React from 'react';
import styles from './styles.module.scss';
import {Link} from 'react-router-dom';
import Layout from "../../components/Layout";
import {APP_ROUTES} from "../../../../app/constants/routes";
import {useSelector} from "react-redux";
import {selectTheme} from "../../selectors";
import {EThemeOptions} from "../../enums";
import cn from "classnames";

export default function NotFound() {
    const activeTheme = useSelector(selectTheme);
    const isThemeBlack = activeTheme === EThemeOptions.black;

    return (
        <Layout>
            <div className="container">
                <div className={cn(
                    styles.notFound,
                    {[styles.notFoundBlack]: isThemeBlack},
                )}>
                    <div className={styles.notFoundTitle}>404</div>
                    <Link to={APP_ROUTES.COMMON.START}>Go to start page</Link>
                </div>
            </div>
        </Layout>
    );
}
