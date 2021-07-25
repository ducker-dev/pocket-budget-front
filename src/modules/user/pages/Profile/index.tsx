import React, {useState} from 'react';
import cn from "classnames";
import {useSelector} from "react-redux";
import {selectTheme} from "../../../common/selectors";
import {EThemeOptions} from "../../../common/enums";
import Layout from "../../../common/components/Layout";
import styles from './styles.module.scss';

export default function Profile() {
    const activeTheme = useSelector(selectTheme);
    const isThemeBlack = activeTheme === EThemeOptions.black;

    const [user, setUser] = useState<any>(null);
    const [userEditForm, setUserEditForm] = useState<any>(null);
    const [newPasswordForm, setNewPasswordForm] = useState<any>(null);

    return (
        <Layout>
            <div className="container">
                <div className={cn(styles.profile, {[styles.profileBlack]: isThemeBlack})}>
                    <h1 className={styles.profileTitle}>Profile</h1>

                </div>
            </div>
        </Layout>
    );
}
