import React from 'react';
import cn from "classnames";
import {useSelector} from "react-redux";
import {selectTheme} from "../../../common/selectors";
import {EThemeOptions} from "../../../common/enums";
import Layout from "../../../common/components/Layout";
import styles from './styles.module.scss';

export default function Profile() {
    const activeTheme = useSelector(selectTheme);
    const isThemeDark = activeTheme === EThemeOptions.dark;

    return (
        <Layout>
            <div className="container">
                <div className={cn(styles.profile, {[styles.profileDark]: isThemeDark})}>
                    <h1 className={styles.profileTitle}>Profile</h1>

                </div>
            </div>
        </Layout>
    );
}
