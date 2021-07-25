import {TCommonState} from "../types";
import {COMMON_ACTION_TYPE} from "../constants";

export function aChangeTheme(payload: TCommonState["theme"]) {
    localStorage.setItem('theme', payload);
    return {
        payload,
        type: COMMON_ACTION_TYPE.CHANGE_THEME,
    };
}

export function aChangeThemeLogic(payload: TCommonState["themeLogic"]) {
    localStorage.setItem('themeLogic', payload);
    return {
        payload,
        type: COMMON_ACTION_TYPE.CHANGE_THEME_LOGIC,
    };
}