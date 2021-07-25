import {createReducer} from "../../../app/helpers";
import {ELangOptions, EThemeLogic, EThemeOptions} from "../enums";
import {TCommonState} from "../types";
import {COMMON_ACTION_TYPE} from "../constants";

const getInitThemeFromLS = () => {
    const lSTheme = localStorage.getItem('theme') || EThemeOptions.light;
    const lSThemeLogic = localStorage.getItem('themeLogic') || EThemeLogic.os;

    if (lSThemeLogic === EThemeLogic.os) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return EThemeOptions.dark
        } else {
            return EThemeOptions.light
        }
    }
    if (lSTheme === EThemeOptions.light || lSTheme === EThemeOptions.dark) {
        return lSTheme
    }
    return EThemeOptions.light
}
const getInitThemeLogicFromLS = () => {
    const lSThemeLogic = localStorage.getItem('themeLogic') || EThemeLogic.os;

    if (lSThemeLogic === EThemeLogic.user || lSThemeLogic === EThemeLogic.os) {
        return lSThemeLogic
    }
    return EThemeLogic.os
}

export const initialState: TCommonState = {
    theme: getInitThemeFromLS(),
    themeLogic: getInitThemeLogicFromLS(),
    lang: ELangOptions.en,
};

const changeTheme = (state: TCommonState, payload: TCommonState['theme']) => ({
    ...state,
    theme: payload,
});

const changeThemeLogic = (state: TCommonState, payload: TCommonState['themeLogic']) => ({
    ...state,
    themeLogic: payload,
});

const changeLang = (state: TCommonState, payload: TCommonState['lang']) => ({
    ...state,
    lang: payload,
});

const handlers = {
    [COMMON_ACTION_TYPE.CHANGE_THEME]: changeTheme,
    [COMMON_ACTION_TYPE.CHANGE_THEME_LOGIC]: changeThemeLogic,
    [COMMON_ACTION_TYPE.CHANGE_LANG]: changeLang,
};

export const commonReducer = createReducer(initialState, handlers);