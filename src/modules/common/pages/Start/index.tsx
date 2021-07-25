import React from 'react';
import styles from './styles.module.scss';
import {Link} from 'react-router-dom';
import Layout from "../../components/Layout";
import {APP_ROUTES} from "../../../../app/constants/routes";
import cn from "classnames";
import {useSelector} from "react-redux";
import {selectTheme} from "../../selectors";
import {EThemeOptions} from "../../enums";

export default function Start() {
    const activeTheme = useSelector(selectTheme);
    const isThemeDark = activeTheme === EThemeOptions.dark;

    return (
        <Layout>
            <div className="container">
                <div className={cn(
                    styles.start,
                    {[styles.startDark]: isThemeDark},
                )}>
                    <div className="row">
                        <div className="skip-xxl-2 col-xxl-8 skip-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1 className={styles.startTitle}>Welcome! This site was created for Selltech LLC.</h1>
                            <Link className={styles.startLink} to={APP_ROUTES.USER.PROFILE}>Go to add user</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
